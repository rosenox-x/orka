const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  maxHttpBufferSize: 4.5e8 // 450MB limit
});
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Login.html'));
});

app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, 'Chat.html'));
});

const PORT = process.env.PORT || 3000;
const nodeHistory = {}; // { port: { username: status/lastSeen } }
const roomUsers = {}; 

io.on('connection', (socket) => {
  socket.on('join_room', ({ username, port }) => {
    if (!username || !port) return;
    socket.join(port);
    socket.username = username;
    socket.port = port;
    
    if (!roomUsers[port]) roomUsers[port] = {};
    roomUsers[port][socket.id] = username;
    
    if (!nodeHistory[port]) nodeHistory[port] = {};
    nodeHistory[port][username] = 'Online';
    
    // Broadcast updated users list with status
    io.to(port).emit('room_users', nodeHistory[port]);
    
    // System message to others
    socket.to(port).emit('message', {
      user: 'System',
      text: `${username} has joined the secure node.`,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });
  });

  socket.on('send_message', (data) => {
    if (!socket.port || !socket.username) return;
    // Broadcast message to everyone in the room, including sender
    io.to(socket.port).emit('message', {
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      user: socket.username,
      text: data.text,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      replyTo: data.replyTo || null // Support for replies
    });
  });

  socket.on('delete_message', (messageId) => {
    if (!socket.port) return;
    io.to(socket.port).emit('delete_message', messageId);
  });

  socket.on('edit_message', ({ id, text }) => {
    if (!socket.port) return;
    io.to(socket.port).emit('edit_message', { id, text });
  });

  socket.on('reaction', ({ msgId, emoji, user }) => {
    if (!socket.port) return;
    io.to(socket.port).emit('reaction', { msgId, emoji, user });
  });

  socket.on('pin_message', ({ id, text, user }) => {
    if (!socket.port) return;
    io.to(socket.port).emit('pin_message', { id, text, user });
  });

  socket.on('unpin_message', (id) => {
    if (!socket.port) return;
    io.to(socket.port).emit('unpin_message', id);
  });

  socket.on('typing', (isTyping) => {
    if (!socket.port || !socket.username) return;
    socket.to(socket.port).emit('typing', { username: socket.username, isTyping });
  });

  socket.on('disconnect', () => {
    if (socket.port && socket.username) {
      if (roomUsers[socket.port]) {
        delete roomUsers[socket.port][socket.id];
        
        // Check if user has no more open sockets in this room
        const stillInRoom = Object.values(roomUsers[socket.port]).includes(socket.username);
        if (!stillInRoom && nodeHistory[socket.port]) {
            nodeHistory[socket.port][socket.username] = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }
        
        io.to(socket.port).emit('room_users', nodeHistory[socket.port]);
      }
      
      socket.to(socket.port).emit('message', {
        user: 'System',
        text: `${socket.username} has left the secure node.`,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

# Orka: Secure Node Messaging Protocol

Orka is a high-performance, real-time messaging platform designed for secure, anonymous, and ephemeral communication. Built with a focus on privacy and a premium user experience, Orka leverages modern web standards to provide a seamless messaging environment across desktop and mobile devices.

---

## Core Features

### Privacy and Security
*   **Protocol-Level Anonymity**: No user accounts or persistent identity storage. Communication is room-based and transient.
*   **UI Hardening**: Built-in protection against unauthorized text selection and copy-paste, ensuring message integrity within the secure environment.
*   **Encrypted Payloads**: Optimized for low-latency, secure data transmission via Socket.io.

### Advanced Messaging Mechanics
*   **Dynamic Customization Engine**: Real-time theme injection allowing users to customize accent colors (presets or hex), UI rounding, font sizes, and notification sounds.
*   **Slide-to-Reply**: Gesture-based interaction system (touch and mouse) for seamless message threading.
*   **Enhanced Media Handling**: Support for large media uploads (up to 50MB) with high-fidelity, click-to-zoom modal previews.
*   **Full Message Lifecycle Control**: Native support for message editing, "unsending" (deletion for all), and interactive nested replies.

### Real-Time Interaction
*   **Active Node Monitoring**: Live user presence tracking within specific secure nodes.
*   **Intelligent Typing Indicators**: Context-aware indicators showing real-time participant activity.
*   **Background Synchronization**: Native browser notification system with background sound alerts and one-click navigation back to active chat nodes.

---

## Technical Architecture

### Frontend Stack
*   **Engine**: Vanilla JavaScript (ES6+) for maximum performance.
*   **Style System**: Tailwind CSS with custom glassmorphism utilities and dynamic CSS variable injection.
*   **Typography**: Optimized for readability using Manrope (Headlines) and Inter (Body).
*   **Icons**: Material Symbols Outlined for a consistent, minimal aesthetic.

### Backend Infrastructure
*   **Runtime**: Node.js with Express for core routing.
*   **Communication Layer**: Bi-directional, event-based synchronization powered by Socket.io 4.x.
*   **Storage**: Zero-persistence server model; client-side settings are managed via localized browser storage.

---

## Installation and Deployment

### 1. Prerequisites
Ensure you have **Node.js** (v14+) and **npm** installed on your system.

### 2. Local Setup
Clone the repository and install the required dependencies:
```bash
git clone https://github.com/rosenox-x/orka.git
cd orka
npm install
```

### 3. Execution
Start the production server:
```bash
npm start
```
By default, the application will be accessible at `http://localhost:3000`.

### 4. Configuration
The server's memory buffer and port can be configured within `server.js`. The default message payload limit is currently set to **50MB**.

---

## User Interaction Guide

*   **Accessing Settings**: Click the gear icon in the top-right header to access the Customization Modal.
*   **Message Actions**: Long-press (mobile) or Right-click (desktop) any message bubble to access the context menu for Editing, Copying, or Unsending.
*   **Replying**: Swipe any message bubble (Right for others, Left for your own) to initiate a reply, or use the context menu.

---

## License and Terms

---

## Technical Design

Orka uses a curated dark-mode palette:
- **AMOLED Surface**: `#000000` for true blacks and power efficiency on modern displays.
- **Dynamic Accents**: User-selectable colors (Mauve, Blue, Emerald, etc.) for UI elements, status indicators, and own message bubbles.
- **Glassmorphism**: Backdrop blur effects on headers and inputs for a layered, premium depth.

---

© 2026 Orka Protocol. A product by Anurag Roy. Developed for secure, modern communication.

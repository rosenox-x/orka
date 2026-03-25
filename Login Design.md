```markdown
# Design System Specification: Nocturnal Elegance

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Luminous Editor."** 

This system rejects the "SaaS-standard" layout of rigid grids and heavy borders. Instead, it draws inspiration from high-end fashion editorial and premium dark-mode interfaces. By leveraging the infinite depth of an AMOLED black (`#000000`) foundation, we create a playground of light where vibrant mauve (`#dcacfb`) and soft lavender (`#dbbdfd`) do not just sit on the screen—they glow. 

The aesthetic is defined by **intentional asymmetry, tonal layering, and "breathable" luxury.** We move away from the "boxy" web by using overlapping elements and high-contrast typography scales that prioritize legibility and a sense of "prestige" over density.

---

## 2. Color & Tonal Surface Theory
The palette is built on a high-contrast relationship between the void of the background and the luminescence of the accent colors.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1-pixel solid borders to section off content. Boundaries must be defined solely through:
1.  **Background Shifts:** Use `surface-container-low` (#131313) or `surface-container` (#191919) to define sections.
2.  **Negative Space:** Utilize the spacing scale (specifically `spacing-8` and `spacing-12`) to create mental groupings.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of polished obsidian and frosted amethyst.
*   **Foundation:** `surface-dim` (#0e0e0e) or `surface-container-lowest` (#000000).
*   **Primary Containers:** `surface-container` (#191919).
*   **Elevated Components:** `surface-container-high` (#1f1f1f).
*   **Interactive Overlays:** Use `surface-bright` (#2c2c2c) to signal an active or hovered state.

### The Glass & Signature Texture
To achieve a bespoke feel, primary CTAs and Hero backgrounds should utilize a **Signature Gradient**:
*   **Linear Gradient:** From `primary` (#dcacfb) to `primary-container` (#bc8edb) at a 135-degree angle.
*   **Glassmorphism:** For floating navbars or modals, use `surface-variant` (#262626) at 60% opacity with a `20px` backdrop-blur.

---

## 3. Typography: The Editorial Voice
We utilize **Manrope** for its geometric clarity and modern technical feel. The hierarchy is designed to feel like a high-end magazine.

*   **Display (lg/md):** Use for "Hero" moments. Set with tight tracking (-2%) to feel authoritative.
*   **Headlines:** The bridge between art and information. Always use `on-surface` (#ffffff).
*   **Body (lg/md):** Use `on-surface-variant` (#ababab) for long-form reading to reduce eye strain against the black background.
*   **Labels:** Use `primary` (#dcacfb) in all-caps for small metadata to add a "tech-luxe" signature.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are largely invisible on AMOLED black. We must use **Tonal Lift**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-highest` (#262626) card placed on a `surface-container-low` (#131313) background creates a natural, soft lift.
*   **Ambient Glow (Shadows):** When a floating effect is required, shadows must be tinted. Use a blur of `32px` with a 4% opacity of the `primary` color (#dcacfb) to mimic the way light reflects off a dark surface.
*   **The Ghost Border Fallback:** If accessibility requires a stroke, use `outline-variant` (#484848) at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Primitives

### Buttons
*   **Primary:** Signature Gradient (Mauve to Lavender). Text: `on-primary-container` (#360b53). Corner: `rounded-md` (0.75rem).
*   **Secondary:** Ghost style. `outline` (#757575) at 20% opacity. Text: `primary` (#dcacfb).
*   **Tertiary:** No container. Pure text using `primary` (#dcacfb) with an underline on hover.

### Cards
*   **Rule:** Forbid divider lines.
*   **Style:** Use `surface-container-low` (#131313). Content should be separated by `spacing-4` (1rem) internal padding. Use `rounded-lg` (1rem) for a softer, more modern silhouette.

### Input Fields
*   **Static State:** `surface-container-highest` (#262626) background, no border.
*   **Focus State:** A 1px "Ghost Border" of `primary` (#dcacfb) and a subtle 4% mauve outer glow.
*   **Error State:** Background shifts to `on-error` (#490013) at 10% opacity; text uses `error` (#ff6e84).

### Selection Chips
*   **Unselected:** `surface-container-high` (#1f1f1f) background.
*   **Selected:** `secondary-container` (#543b71) background with `primary` (#dcacfb) text.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins (e.g., `spacing-20` on the left, `spacing-8` on the right) for editorial layouts.
*   **Do** use `tertiary` (#fff7fa) for high-importance accents or "New" badges to break the purple monotony.
*   **Do** lean into `surface-container-lowest` (#000000) for "immersive" sections like image galleries to make the screen disappear.

### Don’t
*   **Don't** use 100% white (#ffffff) for large blocks of body text; it causes "halving" (visual vibration) on AMOLED. Use `on-surface-variant` (#ababab).
*   **Don't** use standard grey shadows. Always tint shadows with a hint of mauve to maintain the "Nocturnal" atmosphere.
*   **Don't** use the `DEFAULT` (0.5rem) corner for everything. Use `full` (9999px) for pill-shaped tags and `xl` (1.5rem) for large hero cards to create visual rhythm.
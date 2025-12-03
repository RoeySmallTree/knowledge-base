# Visual Identity

**Status:** Codified — Brand codex locked

## Brand Aesthetics

Dark, cinematic, and controlled. CABAL looks like a secure command center: blacks and deep greens with sparing crimson alerts. Surfaces are clean, with subtle signals and thresholds that feel intentional—never ornamental.

## Color Palette

### Primary Colors

**Obsidian** - `#050708`  
- **Use for:** Backgrounds, shells, overlays.  
- **Represents:** Blacksite calm; keeps attention on signals.

**Depth Green** - `#0D1F1A`  
- **Use for:** Panels, cards, navigation.  
- **Represents:** Controlled depth; subtle military precision.

### Secondary Colors

**Signal Slate** - `#1E2A2F`  
- **Use for:** Secondary surfaces, inputs, hover states.

**Fog** - `#E5E9E3`  
- **Use for:** Minimal text, dividers, and icons where clarity is critical.

### Neutral Colors

**Ash** - `#A3ACA7`  
- **Use for:** Muted body text, secondary labels.

**Graphite** - `#4C5550`  
- **Use for:** Borders, hairlines, and subtle separators.

### Accent Colors

**Success (Silent Green)** - `#14B57A`  
**Warning (Amber Echo)** - `#D28B24`  
**Error / Alert (Crimson Gate)** - `#B6122F`  
**Info (Cold Cyan)** - `#3BA2C7`

## Typography

### Primary Typeface

**Space Grotesk** (or **Söhne** if available)  
- **Weights:** Regular, Medium, Bold.  
- **Use for:** Headings, body, system outputs.  
- **Fallback:** `Inter`, `system-ui` only if primary is unavailable.

### Secondary Typeface (if applicable)

**IBM Plex Mono**  
- **Weights:** Regular, Medium.  
- **Use for:** Inline commands, code-like UI, access tokens, `⟁` balances.

### Type Scale

- **H1:** 48–56px / Semi-bold — Hero, primary statements.  
- **H2:** 32–40px / Medium — Section intros.  
- **H3:** 24–28px / Medium — Cards, gates.  
- **Body:** 16–18px / Regular — Core reading.  
- **Caption:** 13–14px / Regular — Labels, system metadata.

## Logo & Iconography

### Logo

Use a minimal wordmark with ample spacing; pair with a triangular or threshold mark when space allows. The mark should be sharp and monochrome.

**Logo Variations:**
- Primary: Wordmark + mark on light or dark solid backgrounds.  
- Secondary: Mark-only for avatars or favicons.  
- One-color inverse for overlays and watermarks.

**Logo Don'ts:**
- Don’t add gradients, glows, or shadows.  
- Don’t round corners or soften edges.  
- Don’t place on busy imagery; keep backgrounds solid or subtly textured.

### Icon Style

Monoline, geometric, and slightly condensed. Avoid cartoonish curves; edges should feel engineered. Use limited stroke weights and consistent corner radii.

**Icon Principles:**
- Use straight lines and hard angles where possible.  
- Keep stroke weight consistent; avoid mixed fills and outlines.  
- Align to a pixel grid; no ornamental details.

## Design Principles

### Ominous Clarity

Controlled contrast; information is clear but framed like a system output. Remove decorative noise.

**In practice:**
- Use generous negative space with deliberate borders.  
- Prefer single-column layouts with decisive hierarchy.

### Signals over Flourish

Surfaces stay quiet until a signal appears; every indicator has meaning.

**In practice:**
- Use accent colors only for state (success, warning, error).  
- Rely on micro-animations for reveals rather than static decoration.

### Controlled Motion

Motion is sparse, purposeful, and slightly delayed to feel deliberate.

**In practice:**
- Gate openings, modals, and overlays fade/scale in 180–240ms with ease-out.  
- No bounce, no spring; favor linear-to-ease curves.

## UI/UX Guidelines

### Spacing System

4px base scale: 4 / 8 / 12 / 16 / 24 / 32 / 48. Keep padding tight; prefer vertical rhythm over dense grids.

### Border Radius

- **Small elements:** 2px  
- **Medium elements:** 4px  
- **Large elements:** 6px (rare — modals, overlays)

### Shadows & Depth

**Elevation levels:**
- **Level 1:** 0 8px 24px rgba(0, 0, 0, 0.24) — cards.  
- **Level 2:** 0 12px 32px rgba(0, 0, 0, 0.32) — modals.  
- **Level 3:** 0 4px 12px rgba(0, 0, 0, 0.32) — tooltips.

### Buttons

**Primary:** Solid Depth Green or Obsidian with Fog text; no gradients; uppercase optional but sparing. Corners 4px; no outlines unless on hover.  
**Secondary:** Ghost with Signal Slate stroke and Fog text; invert on hover with subtle fill.  
**Tertiary:** Text-only with underline on hover; use for low-risk navigation.

### Forms

Inputs on Signal Slate with Fog text; 2px borders in Graphite. Focus state uses Depth Green outline; errors use Crimson Gate border and label. Inline hints are terse; avoid helper paragraphs.

## Imagery & Photography

### Photo Style

If used, images should feel like surveillance stills, control rooms, or abstract signal art. High contrast, desaturated; avoid friendly faces or lifestyle shots.

**Do:**
- Use geometric light, grids, and redacted overlays.  
- Keep subjects obscured or silhouetted to preserve mystique.

**Don't:**
- Use stock-office, smiling teams, or playful illustration.  
- Use gradients or mascots to fill space.

### Illustrations

Prefer none. If required, use minimal line work and sharp geometry; no characters or mascots.

### Image Treatment

Apply soft noise or grain; allow subtle vignettes. Use 16:9 or 3:2 for cinematic framing; avoid circles or rounded crops.

## Animation & Motion

### Animation Principles

Motion should feel like doors opening or signals activating—purposeful, not decorative.

**Timing:**
- Fast interactions: 150–180ms  
- Medium transitions: 200–240ms  
- Slow reveals: 280–320ms

**Easing:**
- Ease-out or custom cubic-bezier (0.25, 0.1, 0.25, 1); avoid bounce or overshoot.

## Accessibility

### Color Contrast

- Text on backgrounds must meet WCAG AA standards (4.5:1 for normal text)
- UI elements must meet WCAG AA standards (3:1)

### Typography Accessibility

- Minimum font size: 16px for body text
- Line height: 1.5 for body text
- Line length: 60–75 characters optimal

### Interactive Elements

- Minimum touch target: 44x44px
- Clear focus states
- Keyboard navigable

## Brand Applications

### Web/Digital

Keep shells dark; use accent colors only as signals. Maintain immersive error overlays with “Return to Safety” as the escape hatch.

### Print/Physical

Prefer monochrome with single accent (Crimson Gate). Use ample negative space and centered marks.

### Social Media

Use the mark or wordmark on solid Obsidian or Fog backgrounds. Avoid gradients, memes, or playful treatments; pair copy with protocol language.

---

**Related:**
- [Brand vibe](./vibe.md) - Tone and voice to match visual identity
- [Messaging](./messaging.md) - Written elements that complement visual
- [Vision](../vision.md) - Core values reflected in design

← Back to [Branding Guide](./README.md)

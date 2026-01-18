# UI Refactor TODOs (Cyberpunk/Glitch System)

## Discovery (required before code)
- [ ] Confirm tech stack and styling system in use (React + Vite + Tailwind + custom CSS?). - react + custom css + neat design system and reusable components 
- [ ] Audit existing design tokens (colors, spacing, typography, radii, shadows) and where they live. - scrape everything - you now do this design
- [ ] Map current component architecture (layout primitives, cards, panels, inputs, modals) and naming conventions. 
- [ ] Identify constraints (legacy CSS, performance, bundle size, existing library patterns).

## Questions to Ask the User
- [ ] Clarify scope: redesign a specific page, refactor existing components to the new system, or build new pages/features in the new style?
- [ ] Confirm which tab(s) take priority (Models, Teams, or both).
- [ ] Validate acceptable level of visual change vs. incremental refactor.

## Implementation Plan (propose before coding)
- [ ] Centralize cyberpunk tokens (colors, font stacks, glow shadows, chamfer clip-paths, scanlines) in a single source.
- [ ] Introduce reusable layout primitives (Frame, Panel, SectionHeader, Card, StatBlock, TreeRow, Input).
- [ ] Replace one-off styles with tokenized classes/utilities to reduce duplication.

## Layout Frame (panels must connect and define page bounds)
- [ ] Build a single page frame: top bar + left panel + center content + right panel all share edges and boundaries.
- [ ] Use a grid/split layout so panels connect (no floating gaps); center content scrolls inside the frame.
- [ ] Enforce outer-only chamfered corners; internal edges remain squared/connected.

## Visual System (Cyberpunk/Glitch)
- [ ] Apply monochrome void background with neon accents; add scanline overlay and subtle grid/circuit texture.
- [ ] Convert cards/panels/inputs to chamfered corners via clip-path (no rounded rectangles).
- [ ] Add neon glow to interactive edges and focus rings; reduce non-neon accent colors.
- [ ] Add controlled glitch effects to key headings (subtle chromatic aberration).
- [ ] Ensure typography uses Orbitron/Share Tech Mono/JetBrains Mono hierarchy and consistent scale.

## Navigation + Directory
- [ ] Unify tree row layout (icon, label, count) and apply the new chamfered row style.
- [ ] Refine indentation and connectors for better hierarchy readability.
- [ ] Align active/hover states with neon accent and glow.

## Cards + Content
- [ ] Harmonize card spacing, dividers, and section headers with the new system.
- [ ] Tighten action icon placement to align with header baselines and neon button styling.
- [ ] Standardize tag/chip shapes and colors to the system tokens.
- [ ] Re-style fallback/model pickers to match cyberpunk inputs and dropdowns.

## Finishing + Accessibility
- [ ] Reduce typography noise: fewer sizes, consistent weights, clear label/value contrast.
- [ ] Validate contrast and focus-visible rings against the dark background.
- [ ] Verify responsive behavior and touch targets across panels and cards.
- [ ] Confirm center content never exceeds the connected frame boundaries.

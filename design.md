# Dark Bento — Style Reference
> Modular Grid, Neon Pulse. A deep charcoal canvas where interactive modules snap into a cohesive bento-style grid, highlighted by subtle glows and vibrant accents.

**Theme:** dark

This design system is built on a "Bento Grid" philosophy: information is chunked into modular cards of varying sizes that pack tightly together. It uses a pure black or deep charcoal background to create a "void" where floating cards with subtle semi-transparent backgrounds and thin borders provide structure. High-contrast white typography and vibrant, neon-like accents (vibrant green, electric blue, royal purple) create a premium "indie developer" aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Black | `#000000` | `--color-void-black` | Primary page background. |
| Deep Charcoal | `#0a0a0a` | `--color-deep-charcoal` | Secondary background for section wrappers or subtle contrast. |
| Card Surface | `rgba(255, 255, 255, 0.03)` | `--color-card-surface` | Default background for bento cards. |
| Card Surface Hover | `rgba(255, 255, 255, 0.06)` | `--color-card-surface-hover` | Background for cards when hovered. |
| Ghost Border | `rgba(255, 255, 255, 0.1)` | `--color-ghost-border` | Subtle, thin borders for all cards. |
| High White | `#ffffff` | `--color-high-white` | Primary heading and high-contrast body text. |
| Muted Gray | `#a1a1aa` | `--color-muted-gray` | Secondary body text, descriptions, and metadata. |
| Neon Green | `#22c55e` | `--color-neon-green` | Status indicators (e.g., "Available"), success states. |
| Electric Blue | `#3b82f6` | `--color-electric-blue` | Primary interactive color, links, focused highlights. |
| Royal Purple | `#a855f7` | `--color-royal-purple` | Accent color for gradients and special highlights. |

## Tokens — Typography

### Inter / Geist Sans — Modern, clean sans-serif optimized for screens and high-density layouts.
- **Substitute:** system-ui, sans-serif
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi Bold), 700 (Bold)
- **Scale:**
  - `body`: 14px (1.5 line height)
  - `subheading`: 18px (1.4 line height)
  - `heading-sm`: 24px (1.2 line height)
  - `heading`: 32px (1.2 line height)
  - `heading-lg`: 48px (1.1 line height)
  - `display`: 64px (1.1 line height)

## Tokens — Spacing & Shapes

**Density:** tight / modular

### Spacing Scale
- `card-gap`: 16px (1rem)
- `card-padding`: 24px (1.5rem)
- `section-gap`: 80px (5rem)

### Border Radius
- `cards`: 24px
- `buttons`: 12px
- `inner-elements`: 8px

### Shadows & Glows
- `card-glow`: `0 0 20px rgba(255, 255, 255, 0.02)`
- `accent-glow`: `0 0 30px rgba(59, 130, 246, 0.1)`

## Components

### Bento Card
**Role:** The fundamental building block.
Background: Card Surface (`rgba(255, 255, 255, 0.03)`), Border: Ghost Border (`rgba(255, 255, 255, 0.1)`), Radius: 24px. Transition: 300ms ease. On hover: Background lightens to Card Surface Hover, border becomes slightly more visible, subtle scale up (1.02).

### Marquee
**Role:** Continuous scrolling text or logo strip.
Height: 40px - 60px. CSS-animated `translateX` loop. Transparent background, high-contrast text or monochrome logos.

### Status Badge
**Role:** Shows availability or active state.
Background: `rgba(34, 197, 94, 0.1)`. Text: Neon Green (#22c55e). Radius: 9999px. Padding: 4px 12px. Includes a pulsing dot.

## Do's and Don'ts

### Do
- Use CSS Grid strictly for the bento layout (`grid-cols-4` or `grid-cols-6`).
- Maintain consistent gaps between cards (16px).
- Use white-space and muted text to prevent the grid from feeling overwhelming.
- Add subtle entry animations (fade-in-up) to grid items.

### Don't
- Do not use heavy borders or solid secondary colors; rely on subtle transparency.
- Avoid using multiple font families; stick to one clean sans-serif.
- Do not use large drop shadows; use "inner glows" or surface differentiation.

## Layout Pattern

The entire index page is a single `max-w-7xl` container with a grid layout.
- `md:grid-cols-4` or `lg:grid-cols-6`
- Bento cards span `col-span-1` up to `col-span-full`.
- Hero card typically takes `col-span-3` or `col-span-4` in the top left.
- Socials and small stats take `col-span-1`.
- Project cards vary in size to create a visual "puzzle" effect.

---
name: Gallery Minimalist
colors:
  surface: '#fff8f7'
  surface-dim: '#e0d8d8'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2f2'
  surface-container: '#f4ecec'
  surface-container-high: '#eee6e6'
  surface-container-highest: '#e8e1e1'
  on-surface: '#1e1b1b'
  on-surface-variant: '#454652'
  inverse-surface: '#332f30'
  inverse-on-surface: '#f7efef'
  outline: '#757684'
  outline-variant: '#c5c5d5'
  surface-tint: '#4155bb'
  primary: '#001157'
  on-primary: '#ffffff'
  primary-container: '#00208b'
  on-primary-container: '#7c90f9'
  inverse-primary: '#bac3ff'
  secondary: '#526526'
  on-secondary: '#ffffff'
  secondary-container: '#d4ec9d'
  on-secondary-container: '#586b2b'
  tertiary: '#2b1600'
  on-tertiary: '#ffffff'
  tertiary-container: '#482800'
  on-tertiary-container: '#c38c50'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dee1ff'
  primary-fixed-dim: '#bac3ff'
  on-primary-fixed: '#001159'
  on-primary-fixed-variant: '#263ca2'
  secondary-fixed: '#d4ec9d'
  secondary-fixed-dim: '#b9cf83'
  on-secondary-fixed: '#151f00'
  on-secondary-fixed-variant: '#3b4d0f'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#f7bb7a'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#663d06'
  background: '#fff8f7'
  on-background: '#1e1b1b'
  surface-variant: '#e8e1e1'
  gallery-white: '#FCF4F4'
  ink-blue: '#00208B'
  moss-accent: '#C2D98C'
  clay-warmth: '#E8AD6E'
typography:
  headline-xl:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-md:
    fontFamily: ebGaramond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: dmSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: dmSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: dmSans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  max-width: 1440px
---

## Brand & Style
The design system is centered on the concept of the "Digital Gallery"—a space where the interface recedes to prioritize the artwork. The brand personality is sophisticated, curated, and intellectual, targeting high-end collectors, curators, and agencies. 

The aesthetic follows a **Minimalist** and **Corporate Modern** hybrid. It utilizes expansive whitespace (negative space) to create a "breathing" canvas. The layout is disciplined and structured, evoking the feeling of a physical art catalogue or a contemporary museum wall. Visual hierarchy is achieved through meticulous typographic scale rather than decorative elements.

## Colors
The palette is rooted in a warm, off-white neutral (`#FCF4F4`) which serves as the primary canvas color, reducing eye strain compared to pure white while maintaining an airy feel. 

- **Primary (Ink Blue):** Used for primary navigation, high-contrast typography, and brand-critical calls to action. It provides a grounded, professional anchor.
- **Secondary & Tertiary (Moss & Clay):** These are used sparingly for subtle UI accents, status indicators, or category filtering to avoid distracting from the artist's work.
- **Neutral:** The background remains consistent across the experience to ensure the "Gallery" feel remains uninterrupted.

## Typography
The typography pairing establishes a "Literary Modernist" tone. 

**EB Garamond** is the voice of the artist. It is used for headlines and titles, providing a classical, graceful, and authoritative presence. **DM Sans** serves as the functional workhorse for body copy and metadata. Its low-contrast, geometric forms offer high legibility and a contemporary counterpoint to the serif headlines.

Key rules:
- Use all-caps with generous letter-spacing for `label-sm` to denote categories or metadata.
- Maintain wide line-heights to ensure the text feels as "airy" as the layout.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model centered within the viewport. 

- **Desktop:** A 12-column grid with a maximum content width of 1440px. Gutters are fixed at 24px, while outer margins expand fluidly beyond 80px to maintain the minimalist focus.
- **Mobile:** A 4-column fluid grid with 24px side margins.
- **Rhythm:** Spacing between sections should be aggressive (e.g., 120px or 160px) to force a pause and emphasize the transition between different works or concepts.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than shadows. In keeping with the minimalist aesthetic, the UI remains mostly flat.

- **Surface Tiers:** Use slight variations of the neutral background or very thin (1px) low-contrast outlines (`#000000` at 5-10% opacity) to define cards or sections.
- **Focus:** No heavy ambient shadows are permitted. If a modal or overlay is required, use a high-blur backdrop filter (glassmorphism) with the primary background color at 80% opacity to maintain the airy atmosphere.

## Shapes
The shape language is **Soft (0.25rem)**. 

While the layout is architectural and structured, the slight rounding of buttons and image containers prevents the design from feeling "sharp" or "aggressive." This subtle softening creates an approachable, modern professional look. Interactive elements like buttons should maintain this consistent radius, while large-scale image sections (hero images) may remain sharp-edged to mimic physical canvases.

## Components
- **Buttons:** Primary buttons use a solid `ink-blue` fill with white `dmSans` bold text. Secondary buttons use a "ghost" style with a 1px `ink-blue` border.
- **Cards:** Artwork cards should be borderless with generous bottom-padding for captions. Use the `label-sm` style for medium/year metadata.
- **Input Fields:** Minimalist design with only a bottom border (1px) in `ink-blue`. Floating labels using the `dmSans` font.
- **Chips/Tags:** Small, pill-shaped tags using the `moss-accent` or `clay-warmth` colors with low opacity backgrounds (10%) and full-opacity text.
- **Navigation:** A simple, high-positioned header with wide-spaced links. Active states are indicated by a simple 1px underline rather than a color change.
- **Lists:** Clean, strictly aligned lists with 1px horizontal dividers. No bullet points; use indentation or typography to denote hierarchy.
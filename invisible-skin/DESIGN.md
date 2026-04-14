# DESIGN.md — Invisible Skin

> Agent-friendly design system document for Invisible Skin.
> Use this file as the source of truth when generating any UI for this brand.

---

## 1. Visual Theme & Atmosphere

**Mood:** Sun-warmed, unhurried, quietly luxurious. The brand lives somewhere between a Mediterranean morning and an editorial still life — terracotta tones, cream surfaces, and the texture of printed paper left in sunlight. Everything carries the faint memory of analogue film: slightly bleached highlights, warm shadow lift, the imperfect beauty of a 35mm frame.

**Density:** Airy. Generous whitespace is a feature, not absence. Let things breathe.

**Design philosophy:** Less is more, but warmth is everything. This is not cold minimalism — it is organic restraint. Every element should feel considered, like it was placed by hand. The film aesthetic is not decoration — it is the brand's emotional register. Digitally perfect is the wrong direction; beautifully imperfect is the goal.

**Key adjectives:** Warm · Editorial · Sun-bleached · Analogue · Grain-touched · Tactile · Unhurried · Elevated-yet-approachable

---

## 1a. Film Aesthetic System

This section defines how the analogue film feel is applied consistently across all graphics, UI surfaces, and imagery. Every visual output should feel like it was captured on film and printed on warm paper — not rendered on a screen.

### Grain

Apply a subtle noise/grain texture to all non-white surfaces. This is the brand's primary texture signal.

```css
/* Film grain overlay — apply to full-bleed backgrounds and hero sections */
.film-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: 0.35;
  border-radius: inherit;
}
```

- Grain intensity: `opacity: 0.35` on cream backgrounds, `opacity: 0.2` on dark/terracotta backgrounds
- Mix blend mode: `multiply` — grain darkens subtly without adding colour
- Never apply grain at full opacity — it should be felt, not seen

### Colour Grading

All graphics use a warm film grade. In CSS, this is achieved via `filter` and `mix-blend-mode` overlays:

```css
/* Film grade — apply to images and photography */
.film-grade {
  filter: sepia(0.12) saturate(0.9) contrast(0.95) brightness(1.03);
}

/* Warm highlight lift — mimics film halation */
.film-grade::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 220, 170, 0.06) 0%,
    rgba(255, 190, 120, 0.04) 50%,
    rgba(180, 130, 80, 0.06) 100%
  );
  mix-blend-mode: screen;
  pointer-events: none;
}
```

**CSS filter values for all brand images:**
- `sepia(0.12)` — warms the image without going sepia
- `saturate(0.9)` — slightly desaturates for a faded film look
- `contrast(0.95)` — lifts blacks gently, stops pure black from appearing
- `brightness(1.03)` — compensates for the contrast lift

### Shadow Lift (Film Blacks)

Pure black (`#000000`) never appears. Shadows are warm and lifted, as they are on developed film. Apply to all generated graphic shadows and overlays:

- Darkest surface: `#2E2A25` (Warm Charcoal)
- Shadow overlay: `rgba(46, 42, 37, 0.08)` — the warm-toned, barely-there elevation shadow
- Text on photography: use `rgba(46, 42, 37, 0.72)` scrim, never pure black

### Halation Glow

Film produces a soft warm glow around bright areas (halation). Simulate on hero text and bright graphic elements:

```css
/* Halation on display headings over photography */
.halation {
  text-shadow:
    0 0 40px rgba(212, 98, 26, 0.18),
    0 0 80px rgba(245, 240, 232, 0.10);
}
```

### Vignette

Apply a subtle vignette to full-bleed images and hero sections — darkens the corners very slightly, draws the eye inward:

```css
/* Vignette overlay */
.vignette::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 55%,
    rgba(46, 42, 37, 0.18) 100%
  );
  pointer-events: none;
  mix-blend-mode: multiply;
}
```

Vignette intensity: subtle. If you can clearly see the vignette, it is too strong.

### Film Borders & Frames

Photography and graphic containers may use a thin inset frame that mimics a film border:

```css
/* Film frame inset */
.film-frame {
  box-shadow: inset 0 0 0 1px rgba(46, 42, 37, 0.12);
  outline: none;
  border: none;
}
```

For editorial moments, a 1px off-white inset shadow (`inset 0 0 0 1px rgba(245, 240, 232, 0.4)`) on dark surfaces mimics a faint film rebate.

### SVG / Graphic Illustration Film Treatment

When generating illustrations or data graphics, apply the film palette consistently:

- **Fill palette:** Pull from the brand warm colours only — Cream (`#F5F0E8`), Parchment (`#EDE5D5`), Sand (`#D9CEBC`), Terracotta (`#D4621A`), Driftwood (`#7A6E62`), Warm Charcoal (`#2E2A25`)
- **No pure whites or pure blacks** in illustrations — use `#F5F0E8` and `#2E2A25` as the extremes
- **Stroke style:** `1px` strokes in Sand or Driftwood — never black outlines
- **Halftone / dot texture:** For backgrounds in illustrations, a repeating dot pattern at `opacity: 0.06` in Warm Charcoal mimics the texture of newsprint

```css
/* Dot texture background for illustration surfaces */
.dot-texture {
  background-image: radial-gradient(circle, #2E2A25 1px, transparent 1px);
  background-size: 12px 12px;
  opacity: 0.06;
}
```

---

## 2. Color Palette & Roles

| Name | Hex | Role |
|---|---|---|
| Terracotta | `#D4621A` | Primary accent, CTAs, brand highlight |
| Burnt Orange | `#C2541A` | Active states, hover, deep emphasis |
| Warm Cream | `#F5F0E8` | Primary background, card surfaces |
| Parchment | `#EDE5D5` | Secondary background, section dividers |
| Sand | `#D9CEBC` | Borders, subtle separators |
| Warm Charcoal | `#2E2A25` | Primary text, headings |
| Driftwood | `#7A6E62` | Secondary text, captions, metadata |
| Dust | `#B5A898` | Placeholder text, disabled states, tertiary UI |
| White | `#FFFFFF` | Text on dark, reversed surfaces |
| Error Red | `#C0392B` | Errors, destructive actions |
| Success Sage | `#6B8C6B` | Confirmations, success states |

**Usage rules:**
- Never use pure black (`#000000`). All dark text uses Warm Charcoal.
- Backgrounds are always cream or parchment — never white or grey.
- Terracotta is used sparingly. It is a punctuation mark, not wallpaper.
- Avoid cool-toned greys or blues entirely — they break the warmth of the palette.

---

## 3. Typography Rules

**Typefaces:**
- **Headings:** `Cormorant Garamond` — elegant serif with editorial soul. Use Italic for brand moments and display contexts.
- **Body / UI:** `Inter` — neutral, legible, comfortable at all sizes.
- **Accent / Labels:** `Inter` at tracked-out uppercase (`letter-spacing: 0.1em`) for subtle categorisation.

**Type scale:**

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display | 56px | 300 (Light) | 1.1 | Hero, campaign headers |
| H1 | 40px | 400 (Regular) | 1.2 | Page titles |
| H2 | 30px | 400 (Regular) | 1.3 | Section headers |
| H3 | 22px | 500 (Medium) | 1.4 | Card titles, sub-sections |
| Body Large | 18px | 400 | 1.6 | Featured body copy |
| Body | 16px | 400 | 1.6 | Standard body copy |
| Body Small | 14px | 400 | 1.5 | Captions, secondary info |
| Label | 11px | 500 | 1.0 | Tags, badges, uppercase labels |
| Micro | 10px | 400 | 1.0 | Legal, footnotes |

**Typography rules:**
- Headings in `Cormorant Garamond` are always set in sentence case — never all-caps.
- Never mix more than two typefaces in a single screen.
- Use Italic `Cormorant Garamond` for brand taglines and campaign text.
- Body text in `Inter` should always sit at minimum `16px` for readability.
- Letter-spacing on uppercase `Inter` labels: `0.1em` to `0.15em`.

---

## 4. Component Stylings

### Buttons

**Primary:**
- Background: `#D4621A` (Terracotta)
- Text: `#FFFFFF`, `Inter`, 14px, weight 500, `letter-spacing: 0.08em`, uppercase
- Border radius: `2px` — almost sharp, subtly refined
- Padding: `14px 32px`
- Hover: background `#C2541A`, no shadow
- Active: background `#A84516`
- Never use drop shadows on buttons

**Secondary (Ghost):**
- Background: transparent
- Border: `1px solid #D4621A`
- Text: `#D4621A`, same treatment as primary
- Hover: background `#F5F0E8` (Cream), border stays

**Tertiary (Text):**
- No border, no background
- Text: `#2E2A25`, underline on hover
- Used for navigation links and inline actions

### Cards

- Background: `#FFFFFF` or `#F5F0E8`
- Border: `1px solid #D9CEBC` (Sand)
- Border radius: `4px`
- Padding: `24px`
- No drop shadows — use border only
- Hover: border colour shifts to `#D4621A`
- Image-first layout: image bleeds to top edge, content sits below with padding

### Inputs & Forms

- Background: `#F5F0E8`
- Border: `1px solid #D9CEBC`
- Border radius: `2px`
- Padding: `12px 16px`
- Font: `Inter`, 16px, Warm Charcoal
- Placeholder: `#B5A898` (Dust)
- Focus: border `1px solid #D4621A`, no box-shadow
- Error: border `1px solid #C0392B`
- Labels: `Inter`, 11px, uppercase, `letter-spacing: 0.1em`, Driftwood

### Navigation

- Background: `#F5F0E8` or transparent over hero
- Logo: Wordmark in `Cormorant Garamond`, Warm Charcoal
- Nav links: `Inter`, 13px, uppercase, `letter-spacing: 0.1em`, Warm Charcoal
- Active link: `#D4621A` with no underline
- Hover: colour shifts to Terracotta
- Mobile: full-screen overlay, cream background

### Tags & Badges

- Background: `#EDE5D5` (Parchment)
- Text: `#7A6E62` (Driftwood), 11px, uppercase, `letter-spacing: 0.1em`
- Border radius: `2px`
- Padding: `4px 10px`
- No coloured badges — use tone and shape only

---

## 5. Layout Principles

**Spacing scale (8px base):**

| Token | Value |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 40px |
| 2xl | 64px |
| 3xl | 96px |
| 4xl | 128px |

**Grid:**
- Desktop: 12-column, `max-width: 1200px`, `gap: 24px`, centered
- Tablet: 8-column, `max-width: 768px`
- Mobile: 4-column, `padding: 0 20px`

**Whitespace philosophy:**
- Sections breathe. Minimum `80px` vertical padding between sections on desktop.
- Let images carry weight — don't crowd them with copy.
- Asymmetric layouts are preferred over rigid symmetry. Offset grids feel natural here.
- Use negative space deliberately — it signals confidence and luxury.

---

## 6. Depth & Elevation

This brand does not use drop shadows. Hierarchy is created through:

- **Surface contrast:** Cream on Parchment, White on Cream
- **Border weight:** `1px` borders define containers, not shadow
- **Scale:** Larger elements naturally read as primary
- **Colour accent:** Terracotta draws the eye as the highest-emphasis signal

If elevation is strictly required (e.g. modals, tooltips):
- Use `box-shadow: 0 4px 16px rgba(46, 42, 37, 0.08)` — warm-toned, barely there
- Never use blue or neutral grey shadows

---

## 7. Imagery & Visual Language

Photography is the hero. Give it room.

**Preferred subjects:** Sun-drenched textures, still life with fruit and skincare, warm outdoor settings, linen and natural materials, editorial close-ups of skin and product.

**Film stocks to reference:** Kodak Portra 400 (warm, slightly lifted shadows, flattering skin), Fuji Pro 400H (cooler midtones but warm overall), Kodak Gold 200 (richer grain, golden cast). All photography should feel like it could have been shot on one of these stocks.

**Colour grading targets:**
- Highlights: warm, slightly blown — creamy rather than white
- Midtones: golden, desaturated slightly — the palette of afternoon sunlight through linen
- Shadows: lifted and warm, never crushed to black — `#2E2A25` is the floor
- Overall CSS filter baseline: `sepia(0.12) saturate(0.9) contrast(0.95) brightness(1.03)`

**Grain:** All images carry visible but subtle grain. This is non-negotiable — digitally smooth imagery reads as wrong for the brand. Grain size should feel like ISO 400 film, not digital noise.

**Vignette:** A soft, barely-there vignette on all hero and full-bleed images draws the eye inward and adds analogue character.

**Lens quality:** Slightly soft rendering is preferred over clinical sharpness. Images shot with vintage or slightly de-tuned lenses feel right. Avoid images with harsh digital sharpening applied.

**Never use stock-feeling photography** — images should feel discovered, not staged.

**Recurring visual motifs:** Newsprint and printed paper, linen and raw fabric, terracotta ceramics, citrus fruit, morning light on skin, objects placed on warm stone or sand.

**Aspect ratios:** `4:5` (portrait) for product, `1:1` for grid, `16:9` for hero banners.

**Graphic overlays on photography — always apply this full film stack:**
1. CSS filter grade: `sepia(0.12) saturate(0.9) contrast(0.95) brightness(1.03)`
2. Warm highlight scrim: `rgba(255, 220, 170, 0.06)` in `screen` blend mode
3. Grain texture overlay: `opacity: 0.35` in `multiply` blend mode
4. Vignette: `radial-gradient` darkening corners to `rgba(46, 42, 37, 0.18)`

---

## 8. Do's and Don'ts

### Do
- Use generous whitespace — it is the brand's luxury signal
- Pair `Cormorant Garamond` with `Inter` for contrast between warmth and clarity
- Let photography dominate — text is secondary to image
- Use Terracotta sparingly as a punctuation mark
- Use sentence case for all headings and labels (except uppercase `Inter` micro labels)
- Keep a consistent warm tonal range — everything should feel like it belongs together

### Don't
- Never use drop shadows on cards or buttons
- Never use cool grey, blue-grey, or off-white as a neutral — Cream and Parchment only
- Never use more than two typefaces on a single screen
- Never use all-caps for body copy or headings set in `Cormorant Garamond`
- Never use bright, saturated colours outside of the palette
- Never centre-align long body copy — left-align always
- Never stack Terracotta backgrounds with Terracotta text
- Never use digitally clean, ungraded photography — it reads as off-brand
- Never crush blacks to pure `#000000` — keep shadows warm and lifted
- Never apply grain so heavily it becomes a stylistic statement — it should be felt, not seen
- Never use cool-toned filters or blue-leaning grades on any image or graphic
- Never use sharp, high-contrast, over-sharpened imagery — softness is intentional

---

## 9. Responsive Behaviour

| Breakpoint | Name | Value |
|---|---|---|
| Mobile | `sm` | 0–767px |
| Tablet | `md` | 768–1023px |
| Desktop | `lg` | 1024–1279px |
| Wide | `xl` | 1280px+ |

**Responsive rules:**
- Touch targets: minimum `44×44px`
- Navigation collapses to hamburger at `< 768px`; overlay is full-screen cream
- Image grids shift: 3-column → 2-column → 1-column
- Body type stays at `16px` minimum on all breakpoints
- Display headings scale down: `56px` → `40px` → `30px`
- Horizontal padding on mobile: `20px` minimum on all sides

---

## 10. Brand Voice in UI Copy

- Calm and confident. Not loud.
- Short sentences. No jargon.
- Tagline energy: *"For skin that stays yours."*
- CTA language: "Discover", "Explore", "Coming soon" — never "Buy Now", "Click here", "Sign up"
- Product descriptions should feel like a friend recommending something quietly.

---

## 11. Agent Prompt Guide

**Quick reference — key colour values:**
- Primary accent: `#D4621A`
- Background: `#F5F0E8`
- Text: `#2E2A25`
- Secondary text: `#7A6E62`
- Border: `#D9CEBC`

**Film system quick reference:**
- Image grade: `filter: sepia(0.12) saturate(0.9) contrast(0.95) brightness(1.03)`
- Grain overlay: `opacity: 0.35`, `mix-blend-mode: multiply`
- Vignette: `radial-gradient(ellipse at center, transparent 55%, rgba(46,42,37,0.18) 100%)`
- Halation glow: `text-shadow: 0 0 40px rgba(212,98,26,0.18), 0 0 80px rgba(245,240,232,0.10)`
- Shadow floor: `rgba(46, 42, 37, 0.08)` — never pure black

**Ready-to-use prompts:**

```
Build a product landing page for Invisible Skin using the DESIGN.md.
Warm cream background (#F5F0E8), Cormorant Garamond headings, Inter body,
terracotta (#D4621A) CTA button. Full-bleed photography hero with film grain
overlay (opacity 0.35, multiply blend), vignette on hero image, warm CSS grade
applied (sepia 0.12, saturate 0.9). Generous whitespace. No shadows.
```

```
Create a coming-soon page for Invisible Skin. Centred layout on parchment
(#EDE5D5) with subtle dot-texture grain background. Italic Cormorant Garamond
display heading with halation glow text-shadow in terracotta. Inter subtext in
Driftwood (#7A6E62). Email capture input with terracotta submit button.
Film vignette on any background imagery. Analogue, warm, unhurried.
```

```
Design a skincare product card component. Cream surface (#F5F0E8), 1px Sand
border (#D9CEBC), 4px border-radius. Product image top-aligned with film grade
filter (sepia 0.12, saturate 0.9, contrast 0.95) and grain overlay. H3 title
in Cormorant Garamond Warm Charcoal, price in Inter Driftwood, terracotta
"Explore" CTA link. Film frame inset: box-shadow inset 0 0 0 1px rgba(46,42,37,0.12).
No drop shadows.
```

```
Generate an editorial layout with a full-bleed film-graded hero image,
overlapping Cormorant Garamond italic headline with halation glow, and a
warm cream content section below. Apply the complete film stack: CSS grade,
grain texture overlay at 0.35 opacity in multiply blend, subtle vignette.
Palette: Terracotta, Cream, Warm Charcoal, Driftwood only.
```

# Design Guidelines: Eunoia Labs Landing Page

## Design Approach
**Reference-Based Approach**: Drawing from Linear's refined minimalism, Vercel's technical sophistication, and OpenAI's futuristic polish. Creating an immersive AI-forward experience that demonstrates cutting-edge innovation for AWS credits application.

## Core Design Elements

### A. Color Palette

**Dark Foundation**:
- Background Base: `hsl(222, 24%, 7%)` (deep space blue-black)
- Surface Elevated: `hsl(222, 20%, 11%)` (card backgrounds)
- Surface Subtle: `hsl(222, 16%, 14%)` (secondary cards)

**AI Gradient System** (Primary Brand):
- Gradient Start: `hsl(270, 80%, 62%)` (electric purple)
- Gradient Mid: `hsl(280, 75%, 58%)` (vibrant violet)
- Gradient End: `hsl(190, 90%, 55%)` (cyber cyan)

**Accent Colors**:
- Glow Purple: `hsl(270, 85%, 68%)` with 40% opacity for halos
- Success Green: `hsl(158, 70%, 52%)` (app store badges, success states)
- Text Primary: `hsl(0, 0%, 97%)`
- Text Secondary: `hsl(222, 12%, 62%)`
- Text Muted: `hsl(222, 10%, 45%)`

**Glassmorphic Elements**:
- Glass Background: `rgba(255, 255, 255, 0.03)`
- Glass Border: `1px solid rgba(255, 255, 255, 0.08)`
- Backdrop Blur: `blur(24px)` for all glass surfaces

### B. Typography

**Font Families** (Google Fonts):
- Display/Headings: 'Space Grotesk' (500, 600, 700 weights)
- Body/UI: 'Inter' (400, 500, 600 weights)

**Type Scale**:
- Hero Display: `5rem (80px)` desktop / `3rem (48px)` mobile, 700 weight, -0.03em tracking
- Section Headers: `3rem (48px)` desktop / `2rem (32px)` mobile, 600 weight, -0.02em tracking
- Feature Titles: `1.5rem (24px)`, 600 weight
- Body Large: `1.125rem (18px)`, 500 weight, 1.7 line-height
- Body: `1rem (16px)`, 400 weight, 1.65 line-height
- Caption: `0.875rem (14px)`, 500 weight, 1.5 line-height

**Gradient Text Treatment**:
Apply gradient overlay to key hero phrases and section titles using purple-to-cyan gradient with `background-clip: text`.

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 24
- Micro spacing: `gap-4` (1rem)
- Component padding: `p-8` to `p-12` (2-3rem)
- Section vertical: `py-20` desktop / `py-12` mobile
- Section horizontal: `px-6` mobile / `px-8` desktop with `max-w-7xl` container

**Grid Strategy**:
- Feature grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Two-column splits: `grid-cols-1 lg:grid-cols-2`
- Gap consistency: `gap-8` for major elements, `gap-4` for grouped items

### D. Component Library

**Hero Section** (Full viewport ~90vh):
- Large abstract AI neural network background image (dark, purple-cyan tones, low opacity overlay)
- Centered logo lockup with company name
- Hero headline with gradient text on "AI" and "Innovation" keywords
- Subtitle describing Sydney-based startup mission
- Two CTAs: Primary solid gradient button + Secondary outlined glass button with backdrop blur
- Floating particle effect overlay (subtle, no animation)

**About Eunoia Labs Section**:
- Two-column layout: Left = Mission statement block, Right = Key differentiators
- Three value proposition cards in glassmorphic design
- Each card: Icon, title, short description, subtle purple glow on hover
- Include "Sydney, Australia" with location pin icon

**Galinia App Showcase** (Hero Treatment):
- Prominent section header with gradient underline accent
- Large Galinia logo with holographic glow effect
- Two-column grid: Left = App description + feature bullets, Right = iPhone mockup/logo visual
- Feature list with checkmark icons in gradient color
- Download button group: App Store + Google Play with icon badges
- QR code cards below buttons with "Scan to Download" labels in glass containers

**Technology Stack Grid**:
- Three-column grid showcasing AI/ML technologies
- Cards with tech icons, names, brief descriptions
- Glassmorphic cards with gradient borders
- Icons in gradient purple-cyan treatment

**Coming Soon Apps Carousel**:
- Horizontal scroll container with snap behavior
- Four placeholder cards (300px width each)
- Each card: Abstract gradient background, "Coming Soon" badge, app category label
- Navigation dots below carousel in gradient colors

**Why AWS Section** (For Application):
- Bold section explaining AWS credits use case
- Two-column: Left = Infrastructure needs breakdown, Right = Growth projection visual
- Bullet points with gradient accent markers
- Glassmorphic stat cards showing planned usage

**Footer**:
- Two-row layout: Top = Company tagline + social links, Bottom = Copyright + contact email
- Minimal design with subtle divider line
- LinkedIn, Twitter/X icons with hover glow effects

### E. Visual Effects

**Glassmorphism Implementation**:
- All cards use `backdrop-blur-xl` with `bg-white/[0.03]`
- 1px gradient border from `white/10` to `white/5`
- Subtle inner shadow for depth

**Glow Effects**:
- Purple glow on Galinia logo: `box-shadow: 0 0 60px rgba(168, 85, 247, 0.4)`
- Button hover: Gradient border glow increase
- Card hover: Subtle `translate-y-[-4px]` with transition duration 300ms

**Gradient Overlays**:
- Hero background: Dark gradient overlay from top (transparent) to bottom (background color)
- Section dividers: Subtle horizontal gradient lines using purple-cyan

### F. Images

**Hero Background Image**: 
Full-width neural network visualization or holographic AI pattern. Dark-toned with purple and cyan accents. Positioned as background with 60% opacity dark overlay. Image should show abstract data flows, geometric AI patterns, or particle systems.

**Galinia App Visual**:
Either iPhone mockup with Galinia interface or large centered Galinia logo with holographic treatment. Displayed in right column of showcase section with subtle gradient glow.

**Technology Icons**:
Use icon library (Heroicons or Lucide) for tech stack, features, and UI elements. Apply gradient fills to primary icons.

## Layout Structure (7 Sections)

1. **Hero** (~90vh): Background image + Logo + Mission + Dual CTAs
2. **About Section** (auto-height): Company introduction + value props in 3-card grid
3. **Galinia Showcase** (auto-height): Featured app with mockup + download options + QR codes
4. **Technology** (auto-height): 3-column grid of AI/ML stack
5. **Future Apps** (auto-height): Horizontal carousel with 4 coming-soon placeholders
6. **AWS Justification** (auto-height): Two-column infrastructure needs + growth stats
7. **Footer** (minimal): Tagline + social + copyright

## Key Principles

- **Premium Futuristic**: Dark theme with strategic gradient usage, holographic glass effects
- **Professional Innovation**: Balanced creativity with credibility for AWS application
- **Purposeful Design**: Every section demonstrates technical capability and vision
- **Performance-Conscious**: Minimal animations, optimized gradients and blur effects
- **Mobile Excellence**: All sections stack beautifully, carousel touch-optimized
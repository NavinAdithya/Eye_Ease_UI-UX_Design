# 🎯 MASTER PROMPT — EyeEase Premium Android App
## "From Figma Prototype → Production-Grade Premium SaaS Android Application"

---

## 🧠 PRODUCT OVERVIEW

**App Name:** EyeEase (or rebrand as: *HealthEye / EyeIQ / IrisAI*)
**Category:** AI-Powered Eye Health & Screen Safety SaaS
**Platform:** Android (Material You / Jetpack Compose)
**Target Users:** Remote workers, students, gamers — anyone with high screen time
**Core Value Prop:** Real-time AI camera analysis of blink rate, screen distance, and eye health scoring — delivered in a premium, cinematic experience.

---

## 🎨 DESIGN SYSTEM — TOKEN SPEC

### Color Palette
```
Background Primary:    #090B0F  (deep space black)
Background Surface:    #111318  (elevated card surface)
Background Elevated:   #1A1D24  (modal / sheet surface)

Accent Gold:           #E8C547  (primary CTA, scores, highlights)
Accent Gold Dim:       #A88B2A  (secondary states)
Accent Cyan:           #00D4FF  (live scan, data streams, biometric)
Accent Danger:         #FF4B4B  (alerts, stop button, warnings)
Accent Success:        #00E676  (good scores, safe distance)

Text Primary:          #F5F6FA
Text Secondary:        #8A8FA8
Text Muted:            #3D4259

Border Subtle:         rgba(255,255,255,0.06)
Glow Gold:             rgba(232,197,71,0.15)
Glow Cyan:             rgba(0,212,255,0.12)
```

### Typography
```
Display Font:     Space Grotesk — Bold 700/800, tight tracking (-0.03em)
Body Font:        Inter — Regular/Medium, 400/500
Mono / Data:      JetBrains Mono — for metrics, scores, live readouts
Caption:          Inter — 11sp, letter-spacing 0.08em, ALL CAPS for labels
```

### Spacing & Shape
```
Corner Radius Cards:   20dp
Corner Radius Chips:   100dp (pill)
Corner Radius CTA:     16dp
Elevation System:      Shadow + inner glow, NO hard drop shadows
Grid:                  16dp margins, 12dp gutters
```

---

## 🖥️ SCREEN-BY-SCREEN REDESIGN BRIEF

---

### SCREEN 1 — Onboarding / Splash (currently: "Monitor Screen Distance")

**Current State:** Static image, plain typography, flat button

**Redesign Brief:**
- Full-bleed **cinematic hero** — extreme macro eye photograph with a **parallax depth effect** (foreground iris vs. background bokeh layers move at different speeds as the screen loads)
- **Particle overlay:** Floating cyan/gold data-point particles drifting upward, simulating biometric scan
- **Animated text reveal:** Each word of "MONITOR · SCREEN · DISTANCE" slams in with a **staggered impact animation** (each word scale-in from 0.6→1.0, with a light blur-to-sharp motion, 80ms stagger)
- Subtext fades in 400ms after: *"AI-powered. Real-time. Effortless."*
- **Progress indicator:** Thin gold bottom-edge progress bar animating across (swipe pager indicator, not dots)
- **CTA Button:** Frosted glass pill — backdrop-blur background, gold text, subtle shimmer sweep animation on idle
- **Ambient glow:** Bottom of screen emits soft gold radial glow bleeding into the dark background

**Animation Stack:**
```
[Load] → Hero image zoom-in (scale 1.08→1.0, 600ms ease-out)
[+100ms] → Particles begin drifting
[+300ms] → Word 1 slams in
[+380ms] → Word 2 slams in
[+460ms] → Word 3 slams in
[+700ms] → CTA button slides up from bottom (translateY: 40→0, fade)
[idle] → Button shimmer sweep every 3s
```

---

### SCREEN 2 — Onboarding Slide 2 (currently: "Improve Your Eye Health Every Day")

**Current State:** Same image, different text, "Get Started" button

**Redesign Brief:**
- Same hero but with a **cyan-tinted color grade** (differentiate slides via ambient color — slide 1 = gold, slide 2 = cyan)
- Text treatment: "IMPROVE YOUR" in white stacked, "EYE HEALTH" in **gradient text (cyan → gold)**, large display weight
- Below text: 3 **micro-feature cards** slide in on a horizontal track:
  ```
  [👁 Blink Monitor]  [📏 Distance AI]  [📊 Health Score]
  ```
  Each card: dark glass surface, icon with glow dot, 1-line label
- **"Get Started" CTA:** Full-width, filled gold, with a right-facing chevron that animates (bounces right on hover/press)
- Background: Subtle **iris scan ring animation** — concentric circles pulsing outward from screen center (cyan, opacity 0.08→0, 2s loop)

---

### SCREEN 3 — Home Dashboard (currently: basic stats view)

**Current State:** Score circle, two stat boxes, screen time row, one recommendation card, bottom nav

**Redesign Brief — Premium Dashboard:**

**Header:**
- "Hi, Monish 👋" — Space Grotesk Bold 24sp
- Right: Settings gear + a **live status dot** (green pulse animation if camera active)

**Eye Health Score Widget (Hero Card):**
- Large **animated arc gauge** — not a simple circle:
  - Multi-layer: outer ring (dark track), middle ring (animated fill, gold→cyan gradient based on score), inner glow pulse
  - Score number: 78 in Space Grotesk 700, 52sp
  - Below score: micro label "/100" in muted color
  - **Score change indicator:** "+3 from yesterday ↑" in success green
  - **Ring animates on screen entry:** Draws from 0% → 78% in 1200ms with an elastic ease

**Stat Chips Row (Blink Rate + Distance):**
- Redesign as **glass morphism cards** with:
  - Colored dot indicator (gold = blink, cyan = distance)
  - Large metric in JetBrains Mono
  - Trend sparkline (3-point mini graph) in background
  - Status badge: "NORMAL" / "LOW" / "ALERT" as pill chip

**Screen Time Bar:**
- Full-width card with a **segmented horizontal bar** — color-coded by hour blocks (green=healthy, amber=caution, red=overuse)
- "8.2h today" with a comparison: "↑ 1.4h vs avg" in amber

**Recommendations Section:**
- Header: "Smart Insights" with a **AI sparkle icon** (animated, rotates)
- Cards use **left-border accent** (gold line, 3dp wide) + icon
- **20-20-20 Rule card:** Include a countdown timer widget embedded in the card — live ticking "Next break in: 14:32"
- Add 2 more recommendation types:
  - 💧 *Hydration Reminder*
  - 🌙 *Blue Light Filter: Active*

**Bottom Navigation:**
- Redesign as a **floating pill nav bar** — not edge-to-edge:
  - Rounded pill shape, dark glass surface, subtle top border glow
  - Active tab: gold icon + label + underline dot
  - Inactive: ghost icon, no label
  - **Scan tab center:** Elevated circular FAB button (gold fill, eye icon, shadow glow)

---

### SCREEN 4 — Live Scan (currently: camera view + basic metrics)

**Current State:** Camera placeholder, EAR/Blinks/Distance chips, session score bar, stop button

**Redesign Brief — Cinematic Scan Mode:**

**Full-Screen Camera Feed:**
- Camera occupies full viewport (not a contained box)
- Overlay: **AI face mesh wireframe** drawn in cyan — landmark dots at eyes, brows, corners, with connecting lines (like Face ID aesthetic)
- **Animated scan line:** Horizontal cyan line sweeps top→bottom every 2s (Terminator / sci-fi scan effect)
- Corner brackets: animated from 0→full size on scan start (like a camera focusing)

**Live Metric Chips:**
- Float as **HUD overlays** near the face region:
  - EAR chip: bottom-left
  - Blinks chip: bottom-center
  - Distance chip: bottom-right
  - Each chip: dark glass + colored indicator light (pulsing)
  - **Distance chip color-codes:** green (<50cm) / amber (50-70cm) / red (>70cm)

**Session Score Panel (Bottom Sheet):**
- Slides up from bottom as a **persistent bottom sheet** (peek height 180dp)
- Score: animated odometer-style counting number
- Progress bar: gradient fill (red→amber→gold→green based on score %, animated fill)
- Session timer: monospace, large, ticking live
- **Insight line:** Live text update — *"Blink rate optimal · Stay at current distance"*

**Stop Scan Button:**
- Red pill, full-width, with a square stop icon
- On long-press: **radial progress ring** around button (hold-to-stop pattern, 2s)
- Haptic feedback on scan complete

**Entry Animation:**
- Camera feed fades in → scan line sweeps once → face brackets animate in → chips slide in from edges → bottom sheet rises

---

### SCREEN 5 — Profile (currently: avatar, settings toggles)

**Current State:** Profile photo, name, email, Premium badge, toggle list

**Redesign Brief — Premium Profile Page:**

**Profile Hero:**
- Avatar in a **multi-ring gold frame**: outer decorative ring (thin gold, rotating 360° on load, 4s), inner ring (solid gold border), avatar
- Name: Space Grotesk Bold 22sp
- Email: muted, 13sp
- **Premium Member Badge:** Redesign as an **animated crown badge** — gold gradient fill, subtle shimmer, crown icon

**Stats Summary Row (new section):**
```
[ Total Sessions: 42 ]  [ Avg Score: 81 ]  [ Streak: 7d 🔥 ]
```
3 equal-width glass cards with mono numbers

**Preferences Section:**
- Each toggle row: glass card (not flat list)
- Toggle: custom design — pill track in dark, thumb in gold when ON
- Icons: filled with soft glow background circles (not flat icons)
- Dark Mode, Notifications, Distance Alert — same as current

**Monitoring Section:**
- **Blink Sensitivity:** Redesign slider as a custom track (dark fill → gold fill), thumb is a glowing gold dot
- Add visual preview: as slider moves, show "Detects blinks at [X] EAR threshold"

**Upgrade CTA (if free tier):**
- Full-width card at bottom: dark glass + gold border
- "*Unlock Pro Analytics →*" with animated arrow

---

## ✨ GLOBAL ANIMATION SYSTEM

```
Micro-interactions:
  - Button press:    scale(0.97) + haptic light, 100ms
  - Card tap:        brightness(1.1) + slight scale, 150ms
  - Toggle flip:     spring physics, thumb overshoot
  - Nav tab switch:  icon morph + label fade, 200ms

Entry animations (per screen):
  - Cards:           translateY(24dp→0) + fade, staggered 60ms
  - Numbers/scores:  count-up from 0 → value, 800ms ease-out
  - Charts/rings:    draw from origin, 1000ms ease-in-out

Ambient animations (always-on, subtle):
  - Score ring:      slow pulsing glow (opacity 0.6→1.0, 3s loop)
  - Live status dot: scale pulse (1.0→1.3, 1s loop)
  - Scan line:       linear sweep, 2s interval
  - Particles:       drift upward, 0.3 opacity, random sizes

Transitions:
  - Screen-to-screen: shared element transition on eye score circle
  - Bottom sheet:     spring enter (stiffness 300, damping 30)
  - Modal:            blur backdrop + scale from 0.92→1.0
```

---

## 📱 IMPLEMENTATION STACK (RECOMMENDED)

```
Language:         Kotlin
UI Framework:     Jetpack Compose (100%)
Animation:        Compose Animate* APIs + Lottie for complex sequences
Camera:           CameraX + ML Kit Face Detection
Charts:           Vico (Compose-native) or MPAndroidChart
Design Tokens:    MaterialTheme + custom CompositionLocal
Navigation:       Compose Navigation with shared element transitions
State:            ViewModel + StateFlow + Compose collectAsStateWithLifecycle
Backend/AI:       On-device ML (ML Kit) for real-time, Firebase for sync
Fonts:            Google Fonts (Space Grotesk + Inter + JetBrains Mono)
Icons:            Phosphor Icons or custom SVG set
```

---

## 🏆 PREMIUM SaaS TIER DIFFERENTIATION

### Free Tier
- Basic dashboard (score, blink rate, distance)
- 3 scans/day
- Standard recommendations

### Pro Tier (Premium Member)
- Unlimited scans
- Full analytics & trend charts (7/30/90 day)
- AI-personalized recommendations
- Export health reports (PDF)
- Custom alert thresholds
- Priority support

**Upgrade flow:** In-app paywall with Lottie animation, feature comparison table, monthly/annual toggle, Google Play Billing integration

---

## 🎯 SIGNATURE DESIGN ELEMENT

**The Iris Scan Ring** — used as the app's visual identity anchor:
- A multi-layered concentric ring system (like a real iris pattern) rendered in code
- Used on: splash screen, score widget, scan screen, app icon
- Animates as: pulsing rings, scanning sweep, score fill arc
- Color-codes health state: gold (good) → amber (caution) → red (alert)
- This element makes every screen recognizably *EyeEase* without needing a logo

---

## 📋 DELIVERABLE CHECKLIST FOR DEV/DESIGN HANDOFF

- [ ] Figma component library with all tokens
- [ ] Lottie JSON files for scan animation, score reveal, particles
- [ ] Compose UI component library (cards, chips, nav, toggles)
- [ ] Dark theme only (no light mode in v1)
- [ ] Accessibility: min 4.5:1 contrast ratio on all text
- [ ] Motion: `prefers-reduced-motion` respected via `LocalWindowInfo`
- [ ] Haptics: defined per interaction type (light, medium, heavy)
- [ ] Loading states: skeleton screens for all data-dependent cards
- [ ] Error states: inline error cards with icon + retry CTA
- [ ] Empty states: illustrated with Lottie, not just text

---

*This master prompt is the single source of truth for taking EyeEase from Figma prototype to a world-class premium Android SaaS product. Every design decision has been made intentionally — execute with precision.*
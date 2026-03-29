# Jared Bynum — Photo & Image Guide

This document describes the visual direction for all photography used on the site. The website uses a **high-end editorial aesthetic** — think NY art gallery catalogue or a premium political magazine spread. All images should reinforce authority, intentionality, and quiet confidence.

---

## General Direction

- **Color treatment**: All photos will be displayed in **grayscale** via CSS. However, source images should still be shot in color for potential future use. On hover, images shift to partial desaturation (60% grayscale), so strong tonal range matters.
- **Mood**: Authoritative, contemplative, purposeful. Never casual or candid-looking.
- **Lighting**: High contrast, directional. Natural light preferred. Avoid flat/even studio lighting.
- **Composition**: Ample negative space. Subject often off-center. Let the frame breathe.
- **Aspect ratios**: Most placeholders use **3:4** (portrait) or **4:3** (landscape). Shoot with cropping flexibility in mind.

---

## Required Photos

### 1. Hero Portrait (`hero-portrait`)
- **Used on**: Home page hero section
- **Aspect**: 3:4 (portrait)
- **Direction**: Three-quarter or full-body shot. Jared standing or leaning naturally. Architectural or urban background — clean lines, concrete, glass. Strong directional light creating dramatic shadows. Expression: confident, approachable, looking slightly off-camera.
- **Reference mood**: Think editorial portraits from *The New York Times Magazine* or *Monocle*.

### 2. About Page Portrait (`about-portrait`)
- **Used on**: About page, bio section
- **Aspect**: 3:4 (portrait)
- **Direction**: Closer crop — chest up or head-and-shoulders. More intimate than the hero. Could be seated at a table, in a meeting space, or outdoors in an urban park. Expression: thoughtful, engaged. Warmer lighting acceptable.

### 3. Campaign Photos (×6)

Each campaign card needs a corresponding image. These should feel **documentary** — real moments, real settings.

#### 3a. Green Future Initiative (`campaign-green-future`)
- **Aspect**: 4:3 (landscape)
- **Direction**: Community gathering or rally in a natural setting. People holding signs, canvassing, or in a town hall. Focus on collective action. Lush greenery visible.

#### 3b. Housing For All Coalition (`campaign-housing`)
- **Aspect**: 4:3 (landscape)
- **Direction**: Diverse group of people at a community organizing meeting or door-knocking. Urban setting — stoops, brownstones, or a community center.

#### 3c. Clean Energy Transition Act (`campaign-clean-energy`)
- **Aspect**: 4:3 (landscape)
- **Direction**: A policy-focused setting — a legislative chamber, a press podium, or Jared in discussion with officials. Formal but dynamic.

#### 3d. Environmental Justice Network (`campaign-env-justice`)
- **Aspect**: 4:3 (landscape)
- **Direction**: Frontline community setting. Could show a community workshop, a neighborhood canvass, or a environmental site visit. Must feel grounded and authentic.

#### 3e. Voter Access & Engagement Drive (`campaign-voter-access`)
- **Aspect**: 4:3 (landscape)
- **Direction**: Voter registration tables, clipboards, conversations with community members. Energy and engagement. Diverse participants.

#### 3f. Public Transit Equity Campaign (`campaign-transit`)
- **Aspect**: 4:3 (landscape)
- **Direction**: Urban transit infrastructure — bus stops, train stations, community meetings about transit. Mix of people and environment.

---

## File Format & Sizing

| Use case | Max width | Format | Notes |
|---|---|---|---|
| Hero portrait | 960px | JPEG | Prioritize quality — this is above the fold |
| About portrait | 800px | JPEG | |
| Campaign photos | 800px | JPEG | Optimize for fast loading |

- Use **JPEG** format for all images.
- Target **< 150KB** per image after compression.
- Name files exactly as the identifiers above (e.g., `hero-portrait.jpg`).

---

## Placement

Place all images in:
```
/public/images/
```

Then reference them in the components by passing the `src` prop to `PhotoPlaceholder`:
```vue
<PhotoPlaceholder
  src="/images/hero-portrait.jpg"
  alt="Jared Bynum — editorial portrait"
  aspect="3 / 4"
/>
```

---

## What to Avoid

- **No selfies or phone-quality photos**
- **No busy backgrounds** — keep environments clean
- **No group photos where Jared is not identifiable**
- **No logos, branding, or text overlays** on source images
- **No color filters or heavy editing** — CSS handles the grayscale treatment

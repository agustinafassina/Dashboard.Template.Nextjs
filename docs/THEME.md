# Customize the color palette
The entire UI (accent, light/dark backgrounds, charts) is controlled from **`src/config/theme.ts`**.

## Option A — Change in one step (preset)
1. Open `src/config/theme.ts`.
2. Change the line:

```ts
export const THEME_PRESET = 'lilac' as ThemeSelection
```

to one of:

| Value | Style |
|-------|--------|
| `'lilac'` | Violet / lilac (default) |
| `'neutral'` | Neutral gray |
| `'blue'` | Blue |
| `'emerald'` | Emerald green |

3. Save and restart `npm run dev` if it was already running.

Presets are defined in `src/config/theme.presets.ts` (only edit this file if you want to add a new preset).

---

## Option B — Custom palette (3 blocks)
1. In `src/config/theme.ts`, set:

```ts
export const THEME_PRESET = 'custom' as ThemeSelection
```

2. Edit **`themeCustom`** with three groups:

| Block | What it affects |
|--------|-----------------|
| `accent` | Buttons, links, active sidebar item, focus rings (`brand_*`) |
| `surfaceLight.page` | Main content background in light theme (`bg-brand_50`) |
| `surfaceDark.page` | Main background in dark theme (`bg-shell-dark`) |
| `surfaceDark.elevated` | Sidebar, navbar, elevated cards in dark (`bg-shell-dark-elevated`) |

3. The `accent` scale must include shades `50` through `900` (you can copy a scale from [Tailwind colors](https://tailwindcss.com/docs/customizing-colors)).

**Charts** are generated automatically from the accent; no other file is required.

---

## What not to change
- **`gray_*`** in Tailwind: text, borders, neutral states.
- Components (`styles.ts`): already use `brand_*` and `shell-*`.
- **`tailwind.config.ts`**: imports colors from `theme.ts`.

---

## Quick map: class → token
| Tailwind class | Source in theme |
|----------------|-----------------|
| `bg-brand_50` | `surfaceLight.page` |
| `bg-brand_500`, `text-brand_700` | `accent` |
| `bg-shell-dark` | `surfaceDark.page` |
| `bg-shell-dark-elevated` | `surfaceDark.elevated` |
| Recharts charts | `themeChart` (derived) |

---

## Add a new preset
1. Copy a block in `src/config/theme.presets.ts` (e.g. `lilac`).
2. Rename the key (e.g. `coral`).
3. In `theme.ts`, set `THEME_PRESET = 'coral' as ThemeSelection`.

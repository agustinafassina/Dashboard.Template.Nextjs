export type ThemeAccentScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  900: string
}

export type ThemePalette = {
  id: string
  label: string
  accent: ThemeAccentScale
  surfaceLight: { page: string }
  surfaceDark: { page: string; elevated: string }
}

export const themePresets = {
  lilac: {
    id: 'lilac',
    label: 'Lilac / Violet',
    accent: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#7c3aed',
      600: '#6d28d9',
      700: '#5b21b6',
      900: '#3b0764',
    },
    surfaceLight: { page: '#f5f3ff' },
    surfaceDark: { page: '#2e2640', elevated: '#1f1a2e' },
  },
  neutral: {
    id: 'neutral',
    label: 'Neutral Gray',
    accent: {
      50: '#f4f4f5',
      100: '#e4e4e7',
      200: '#a1a1aa',
      300: '#d4d4d8',
      400: '#71717a',
      500: '#3f3f46',
      600: '#27272a',
      700: '#52525b',
      900: '#18181b',
    },
    surfaceLight: { page: '#f4f4f5' },
    surfaceDark: { page: '#3f3f46', elevated: '#27272a' },
  },
  blue: {
    id: 'blue',
    label: 'Blue',
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#2563eb',
      600: '#1d4ed8',
      700: '#1e40af',
      900: '#1e3a8a',
    },
    surfaceLight: { page: '#eff6ff' },
    surfaceDark: { page: '#1e293b', elevated: '#0f172a' },
  },
  emerald: {
    id: 'emerald',
    label: 'Emerald',
    accent: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#059669',
      600: '#047857',
      700: '#065f46',
      900: '#064e3b',
    },
    surfaceLight: { page: '#ecfdf5' },
    surfaceDark: { page: '#134e4a', elevated: '#042f2e' },
  },
} as const satisfies Record<string, ThemePalette>

export type ThemePresetId = keyof typeof themePresets

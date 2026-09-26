import {
  themePresets,
  type ThemePalette,
  type ThemePresetId,
} from './theme.presets'

export type ThemeSelection = ThemePresetId | 'custom'
export const THEME_PRESET = 'lilac' as ThemeSelection

export const themeCustom: ThemePalette = {
  id: 'custom',
  label: 'Custom',
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
}

const activePalette: ThemePalette =
  THEME_PRESET === 'custom' ? themeCustom : themePresets[THEME_PRESET]

export const themeAccent = activePalette.accent
export const themeSurfaceLight = activePalette.surfaceLight
export const themeSurfaceDark = activePalette.surfaceDark

export const themeBrandColors = {
  ...themeAccent,
  50: themeSurfaceLight.page,
} as const

export const themeShellColors = {
  light: themeSurfaceLight.page,
  dark: themeSurfaceDark.page,
  'dark-elevated': themeSurfaceDark.elevated,
} as const

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.replace('#', '')
  const full =
    normalized.length === 3
      ? normalized
          .split('')
          .map((c) => c + c)
          .join('')
      : normalized
  const int = Number.parseInt(full, 16)
  const r = (int >> 16) & 255
  const g = (int >> 8) & 255
  const b = int & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const themeChart = {
  light: {
    cardBg: '#ffffff',
    cardBorder: themeAccent[200],
    title: themeAccent[700],
    label: themeAccent[400],
    grid: themeAccent[100],
    tooltipBg: '#ffffff',
    tooltipBorder: themeAccent[200],
    tooltipText: themeAccent[700],
    primary: themeAccent[500],
    primaryFill: themeAccent[100],
    secondary: themeAccent[400],
    secondaryFill: hexToRgba(themeAccent[400], 0.2),
  },
  dark: {
    cardBg: themeSurfaceDark.elevated,
    cardBorder: themeAccent[900],
    title: themeAccent[100],
    label: themeAccent[300],
    grid: themeSurfaceDark.page,
    tooltipBg: themeSurfaceDark.elevated,
    tooltipBorder: themeAccent[900],
    tooltipText: themeAccent[100],
    primary: themeAccent[300],
    primaryFill: hexToRgba(themeAccent[300], 0.2),
    secondary: themeAccent[400],
    secondaryFill: hexToRgba(themeAccent[400], 0.15),
  },
} as const

export { themePresets, type ThemePresetId, type ThemePalette }

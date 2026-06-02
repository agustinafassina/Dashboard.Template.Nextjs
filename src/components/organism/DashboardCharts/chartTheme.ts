import { themeChart } from '@/config/theme'

export type ChartTheme = {
  cardBg: string
  cardBorder: string
  title: string
  label: string
  grid: string
  tooltipBg: string
  tooltipBorder: string
  tooltipText: string
  primary: string
  primaryFill: string
  secondary: string
  secondaryFill: string
}

export function getChartTheme(isDark: boolean): ChartTheme {
  return isDark ? themeChart.dark : themeChart.light
}

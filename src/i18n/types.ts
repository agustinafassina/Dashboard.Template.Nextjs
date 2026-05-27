import type { Locale } from '@/context/LanguageContext'

export type SectionKey = 'dashboard' | 'costs' | 'iam'

export type TranslationDictionary = {
  nav: {
    mainAriaLabel: string
    goToDashboard: string
  }
  sections: Record<SectionKey, string>
  homeContent: Record<SectionKey, string>
  dashboardCharts: {
    weeklyActivity: string
    usageTrend: string
  }
  sidebar: {
    ariaLabel: string
    menuTitle: string
    navAriaLabel: string
    expandMenu: string
    collapseMenu: string
    version: string
  }
  userMenu: {
    menuOf: string
    appearance: string
    themeAriaLabel: string
    themeActive: string
    themeLight: string
    themeDark: string
    language: string
    languageAriaLabel: string
    guide: string
    logout: string
  }
  language: {
    es: string
    en: string
  }
}

export type { Locale }

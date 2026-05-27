import type { TranslationDictionary } from '@/i18n/types'

const en: TranslationDictionary = {
  nav: {
    mainAriaLabel: 'Main navigation',
    goToDashboard: 'Go to dashboard',
  },
  sections: {
    dashboard: 'Dashboard',
    costs: 'Costs',
    iam: 'Iam Users',
  },
  homeContent: {
    dashboard: 'Welcome to Dashboard',
    costs: 'Costs Overview',
    iam: 'Iam Users',
  },
  dashboardCharts: {
    weeklyActivity: 'Weekly activity',
    usageTrend: 'Usage trend',
  },
  sidebar: {
    ariaLabel: 'Navigation sidebar',
    menuTitle: 'Menu',
    navAriaLabel: 'Main navigation',
    expandMenu: 'Expand menu',
    collapseMenu: 'Collapse menu',
    version: 'Version',
  },
  userMenu: {
    menuOf: '{{name}} menu',
    appearance: 'Appearance',
    themeAriaLabel: 'Dashboard theme',
    themeActive: 'Active: {{theme}}',
    themeLight: 'Light',
    themeDark: 'Dark',
    language: 'Language',
    languageAriaLabel: 'Dashboard language',
    guide: 'Guide — About this site',
    logout: 'Log out',
  },
  language: {
    es: 'Español',
    en: 'English',
  },
}

export default en

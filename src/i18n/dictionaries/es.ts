import type { TranslationDictionary } from '@/i18n/types'

const es: TranslationDictionary = {
  nav: {
    mainAriaLabel: 'Navegación principal',
    goToDashboard: 'Ir al dashboard',
  },
  sections: {
    dashboard: 'Dashboard',
    costs: 'Costos',
    iam: 'Usuarios Iam',
  },
  homeContent: {
    dashboard: 'Bienvenido al Dashboard',
    costs: 'Resumen de costos',
    iam: 'Usuarios Iam',
  },
  dashboardCharts: {
    weeklyActivity: 'Actividad semanal',
    usageTrend: 'Tendencia de uso',
  },
  sidebar: {
    ariaLabel: 'Menú lateral de navegación',
    menuTitle: 'Menú',
    navAriaLabel: 'Navegación principal',
    expandMenu: 'Expandir menú',
    collapseMenu: 'Colapsar menú',
    version: 'Versión',
  },
  userMenu: {
    menuOf: 'Menú de {{name}}',
    appearance: 'Apariencia',
    themeAriaLabel: 'Tema del dashboard',
    themeActive: 'Activo: {{theme}}',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    language: 'Idioma',
    languageAriaLabel: 'Idioma del dashboard',
    guide: 'Guía — About this site',
    logout: 'Cerrar sesión',
  },
  language: {
    es: 'Español',
    en: 'English',
  },
}

export default es

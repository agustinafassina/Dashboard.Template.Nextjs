export interface GuideSection {
  id: string
  title: string
  content: string
}

export const siteGuideIntro = {
  title: 'About this site',
  description:
    'Guía del dashboard. El contenido se completa por sección a medida que el sitio crece.',
}

export const siteGuideSections: GuideSection[] = [
  {
    id: 'general',
    title: 'General',
    content:
      'Bienvenido al dashboard. Aquí encontrarás una descripción general del sitio, su propósito y cómo navegar por las distintas áreas.\n\n(Pendiente de completar.)',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    content:
      'La sección Dashboard muestra el resumen principal y los indicadores clave.\n\n(Pendiente de completar.)',
  },
  {
    id: 'costs',
    title: 'Costs',
    content:
      'En Costs podrás consultar y analizar la información de costos.\n\n(Pendiente de completar.)',
  },
  {
    id: 'iam',
    title: 'IAM Users',
    content:
      'IAM Users centraliza la gestión y visualización de usuarios de identidad.\n\n(Pendiente de completar.)',
  },
]

export const dashboardChartsStyles = {
  grid: 'grid gap-4 lg:grid-cols-2',
  card: 'rounded-xl border p-4 shadow-sm',
  cardTitle: 'mb-4 text-sm font-semibold',
  chartWrap: 'h-[220px] w-full',
} as const

export const dashboardSectionStyles = {
  shell:
    'mx-auto min-h-[calc(90vh-10rem)] min-w-[70rem] max-w-[90rem] p-4 text-gray_800 dark:text-gray_200',
  welcome: 'mb-6 text-lg font-semibold text-gray_900 dark:text-gray_100',
} as const

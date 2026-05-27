import { sidebarConfig } from '@/config/sidebar'

export function getCurrentSectionName(pathname: string | null): string | null {
  if (!pathname) return null

  let bestMatch: { name: string; path: string } | null = null

  for (const items of Object.values(sidebarConfig)) {
    for (const item of items) {
      const isMatch =
        pathname === item.path || pathname.startsWith(`${item.path}/`)

      if (isMatch && (!bestMatch || item.path.length > bestMatch.path.length)) {
        bestMatch = item
      }
    }
  }

  return bestMatch?.name ?? null
}

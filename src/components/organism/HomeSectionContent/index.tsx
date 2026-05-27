'use client'

import { useEffect, type ReactElement } from 'react'
import { useRouter } from 'next/navigation'
import { homeSectionStyles } from './styles'

const VALID_SECTIONS = new Set(['dashboard', 'costs', 'iam'])

interface HomeSectionContentProps {
  section: string | undefined
}

function DashboardView() {
  return (
    <div className={homeSectionStyles.shell}>
      <div className={homeSectionStyles.grid}>Welcome to Dashboard</div>
    </div>
  )
}

function CostsView() {
  return (
    <div className={homeSectionStyles.shell}>
      <div className={homeSectionStyles.grid}>Costs Overview</div>
    </div>
  )
}

function IamView() {
  return (
    <div className={homeSectionStyles.shell}>
      <div className={homeSectionStyles.grid}>IAM Users</div>
    </div>
  )
}

const sectionViews: Record<string, () => ReactElement> = {
  dashboard: DashboardView,
  costs: CostsView,
  iam: IamView,
}

export default function HomeSectionContent({ section }: HomeSectionContentProps) {
  const router = useRouter()

  useEffect(() => {
    if (!section) {
      router.replace('/home/dashboard')
      return
    }
    if (!VALID_SECTIONS.has(section)) {
      router.replace('/home/dashboard')
    }
  }, [section, router])

  if (!section || !VALID_SECTIONS.has(section)) {
    return null
  }

  const View = sectionViews[section]
  return <View />
}

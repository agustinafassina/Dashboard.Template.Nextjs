import React from 'react'
import { SidebarProvider } from '@/context/SidebarContext'
import SideBar from '@/components/organism/Sidebar'
import { homeLayoutStyles } from './styles'

const DirectoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className={homeLayoutStyles.wrapper}>
        <div className={homeLayoutStyles.row}>
          <SideBar />
          <main className={homeLayoutStyles.main}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default DirectoryLayout

import React from 'react'
import { Montserrat } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import NavBar from '@/components/organism/NavBar'
import Providers from '@/provider'
import '@/styles/globals.css'
import { AxiosInterceptor } from '@/api/axiosBase'
import { cn } from '@/styles/cn'
import { rootLayoutStyles } from './styles'

export const metadata = {
  title: 'Template Agus App',
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(rootLayoutStyles.html, montserrat.className)}
      suppressHydrationWarning
    >
      <AxiosInterceptor>
        <UserProvider>
          <body className={rootLayoutStyles.body} suppressHydrationWarning>
            <Providers>
              <NavBar />
              {children}
            </Providers>
          </body>
        </UserProvider>
      </AxiosInterceptor>
    </html>
  )
}

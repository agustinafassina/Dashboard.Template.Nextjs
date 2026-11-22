'use client'
import React, { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/context/LanguageContext'
import { providerStyles } from './styles'

export default function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  )

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LanguageProvider>
        <div className={providerStyles.wrapper}>
          <HeroUIProvider>
            <QueryClientProvider client={client}>{children}</QueryClientProvider>
          </HeroUIProvider>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
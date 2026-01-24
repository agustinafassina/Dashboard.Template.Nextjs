'use client'
import React, { ReactNode, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient())

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col">
        <NextUIProvider>
          <QueryClientProvider client={client}>{children}</QueryClientProvider>
        </NextUIProvider>
      </div>
    </ThemeProvider>
  )
}
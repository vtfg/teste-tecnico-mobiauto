"use client"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/lib/query-client"
import theme from "@/lib/theme"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <InitColorSchemeScript attribute="class" defaultMode="light" />
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  )
}

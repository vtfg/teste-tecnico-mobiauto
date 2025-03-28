import type { Metadata } from "next"
import { Container } from "@mui/material"

import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Tabela Fipe",
  description: "Consulte a tabela Fipe de qualquer carro em segundos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          <Container
            sx={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}

import type { Metadata } from "next"

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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

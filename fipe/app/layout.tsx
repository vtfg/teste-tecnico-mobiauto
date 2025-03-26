import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fipe",
  description: "Consulte a tabela Fipe de qualquer carro em segundos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

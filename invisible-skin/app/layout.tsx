import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invisible Skin',
  description: 'For skin that stays yours. Launching soon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
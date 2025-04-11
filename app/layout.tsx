import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Siddharth Gomatam',
  description: 'Portfolio of Siddharth Gomatam Srinivasan',
  generator: 'siddharthhere.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

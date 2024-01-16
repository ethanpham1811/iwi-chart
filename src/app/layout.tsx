import type { Metadata } from 'next'
import { Inder } from 'next/font/google'
import './globals.css'

const font = Inder({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IWI Chart',
  description: 'Customized Bar chart with Echarts Apache'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

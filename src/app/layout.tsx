import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube-app',
  description: 'plataforma de videos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header/>
      <body className={`${inter.className} overflow-x-hidden w-full xl:max-w-[1248px] min-h-screen`}>{children}</body>
    </html>
  )
}

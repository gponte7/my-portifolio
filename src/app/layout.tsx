import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://guilherme-ponte.vercel.app/'),
  title: 'Guilherme Ponte | Frontend Developer',
  openGraph: {
    images: '/gponte.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}

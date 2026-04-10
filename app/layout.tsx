import type { Metadata, Viewport } from 'next'
import { Montserrat, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Collection Suites - Available Suites',
  description:
    'Explore the vision and craftsmanship behind CollectionSuites. Luxury collector suites in Miami and Palm Beach.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cinzel.variable}`}>
    <body className="font-sans antialiased" suppressHydrationWarning>
          {children}
        <Analytics />
      </body>
    </html>
  )
}

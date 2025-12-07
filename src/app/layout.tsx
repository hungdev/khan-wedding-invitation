import type { Metadata, Viewport } from 'next'
import {
  Crimson_Pro,
  Gowun_Dodum,
  Noto_Sans_KR,
  Ephesis,
  Dancing_Script,
  Parisienne,
  Great_Vibes,
  Alex_Brush,
} from 'next/font/google'
import '@/app/globals.css'
import { data } from '@/models'
import { BGEffect } from '@/components/bgEffect'

const CrimsonPro = Crimson_Pro({
  variable: '--font-crimson-pro',
  subsets: ['latin'],
  display: 'swap',
})

const GowunDodum = Gowun_Dodum({
  variable: '--font-gowun-dodum',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const NotoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
})

const EphesisFont = Ephesis({
  variable: '--font-ephesis',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const DancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
  display: 'swap',
})

const ParisienneFont = Parisienne({
  variable: '--font-parisienne',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const GreatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const AlexBrush = Alex_Brush({
  variable: '--font-alex-brush',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  robots: 'noindex, nofollow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#fafafa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* open graph */}
        <meta property="og:title" content={data.meta.title} />
        <meta property="og:description" content={data.meta.description} />
        <meta property="og:image" content={data.meta.thumbnail} />
        <meta property="og:url" content={data.meta.url} />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.meta.title} />
        <meta name="twitter:description" content={data.meta.description} />
        <meta name="twitter:image" content={data.meta.thumbnail} />
      </head>
      <body
        className={`${CrimsonPro.variable} ${GowunDodum.variable} ${NotoSansKR.variable} ${EphesisFont.variable} ${DancingScript.variable} ${ParisienneFont.variable} ${GreatVibes.variable} ${AlexBrush.variable} antialiased bg-[#F4ECD8] overflow-hidden`}
      >
        <BGEffect />
        <main
          className="max-w-[425px] w-full vintage-paper mx-auto relative shadow-2xl"
          role="main"
        >
          {children}
        </main>
      </body>
    </html>
  )
}

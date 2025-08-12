import type { Metadata } from 'next'
import { Roboto, Open_Sans } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto'
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-opensans'
})

export const metadata: Metadata = {
  title: 'Emerssive - Immersive Technology Solutions',
  description: 'Emerssive delivers cutting-edge immersive technology solutions for businesses. From VR/AR experiences to interactive digital solutions, we help companies create engaging, innovative digital experiences.',
  keywords: 'immersive technology, VR, AR, digital experiences, interactive solutions, virtual reality, augmented reality',
  authors: [{ name: 'Emerssive' }],
  openGraph: {
    title: 'Emerssive - Immersive Technology Solutions',
    description: 'Cutting-edge immersive technology solutions for modern businesses',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${openSans.variable} font-opensans antialiased bg-secondary text-text`}>
        {children}
      </body>
    </html>
  )
}

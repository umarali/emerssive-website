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
  title: 'Emerssive - A full-service software development company',
  description: 'Emerssive is a full-service software development company specializing in Generative AI, Web and Mobile. Our experienced team transforms concepts into impactful applications for startups to enterprise companies.',
  keywords: 'software development, generative ai, web development, mobile development, startups, enterprise companies',
  authors: [{ name: 'Emerssive' }],
  openGraph: {
    title: 'Emerssive - A full-service software development company',
    description: 'Emerssive is a full-service software development company specializing in Generative AI, Web and Mobile. Our experienced team transforms concepts into impactful applications for startups to enterprise companies.',
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

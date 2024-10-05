import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WebTech Solutions - Professional Web Services',
    template: '%s | WebTech Solutions'
  },
  description: 'WebTech Solutions provides top-notch web development, design, and hosting services for businesses of all sizes.',
  keywords: ['web development', 'web design', 'web hosting', 'professional web services', 'responsive design', 'SEO optimization'],
  authors: [{ name: 'WebTech Solutions Team' }],
  creator: 'WebTech Solutions',
  publisher: 'WebTech Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'WebTech Solutions - Professional Web Services',
    description: 'Transform your online presence with our expert web development, design, and hosting services.',
    url: 'https://www.webtechsolutions.com',
    siteName: 'WebTech Solutions',
    images: [
      {
        url: 'https://www.webtechsolutions.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'WebTech Solutions - Professional Web Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebTech Solutions - Professional Web Services',
    description: 'Transform your online presence with our expert web development, design, and hosting services.',
    images: ['https://www.webtechsolutions.com/twitter-image.jpg'], // Replace with your actual Twitter image URL
    creator: '@WebTechSolutions', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg' },
      new URL('/favicon.svg', 'https://www.webtechsolutions.com'),
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4a90e2' },
    { media: '(prefers-color-scheme: dark)', color: '#4a90e2' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
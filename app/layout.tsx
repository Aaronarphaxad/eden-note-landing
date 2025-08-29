import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "EdenNote - Where Ideas Grow | Spiritual Note-Taking App",
    template: "%s | EdenNote"
  },
  description: "EdenNote – Where ideas grow. The ultimate mobile note-taking app for sermons, Bible study, and spiritual growth. Record audio, insert verses, save insights, and never miss a divine message again.",
  keywords: [
    "spiritual notes",
    "sermon notes",
    "bible study app",
    "christian app",
    "note taking",
    "spiritual growth",
    "church notes",
    "bible verses",
    "faith app",
    "religious notes"
  ],
  authors: [{ name: "Aaron Omale" }],
  creator: "Aaron Omale",
  publisher: "EdenNote",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "EdenNote - Where Ideas Grow",
    description: "The ultimate mobile note-taking app for sermons, Bible study, and spiritual growth. Available on iOS and Android.",
    url: "https://your-domain.vercel.app",
    siteName: "EdenNote",
    images: [
      {
        url: "/hero image.webp",
        width: 1200,
        height: 630,
        alt: "EdenNote App Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EdenNote - Where Ideas Grow",
    description: "The ultimate mobile note-taking app for sermons, Bible study, and spiritual growth.",
    images: ["/hero image.webp"],
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
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

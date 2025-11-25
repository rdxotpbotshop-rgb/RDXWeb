import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "RDX Studio - Professional Web Development & Telegram Bots",
  description: "Premium web development and Telegram bot creation services. Transform your ideas into reality.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${spaceGrotesk.variable} ${orbitron.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  title: "Maroua | Engineering Student & AI Enthusiast",
  description:
    "Personal portfolio of Maroua - an engineering student exploring AI, Data Science, Cloud Computing, and modern web development.",
  icons: {
    icon: "/M.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_jetbrainsMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden font-sans antialiased">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(52,211,153,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(700px_circle_at_50%_100%,rgba(16,185,129,0.08),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed -left-24 top-24 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed -right-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl animate-float"
        />
        {children}
      </body>
    </html>
  )
}

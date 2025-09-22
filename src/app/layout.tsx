import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ThemeProvider from "@/features/ThemeProvider"
import Header from "@/components/Header"
import { TanstackProvider } from "@/features/TanstackProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Илья Черемисин | Frontend developer",
  description:
    "Discover my journey as a frontend developer. View my CV, featured projects, and skills",
  robots: "index, follow",
  openGraph: {
    title: "Илья Черемисин | Frontend developer",
    description: "Frontend developer cv",
    emails: "cheremisin.ilya@gmail.com",
    images: '/api/og'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#050505f1] text-black dark:text-white `}
      >
        <TanstackProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}

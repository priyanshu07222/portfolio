import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Priyanshu Tiwari - Full-Stack Blockchain Developer",
  description:
    "Building scalable and secure decentralized applications. Experienced in Solana, Ethereum, Rust, TypeScript, and modern web technologies.",
  keywords: ["blockchain developer", "full-stack developer", "solana", "ethereum", "rust", "typescript", "web3"],
  authors: [{ name: "Priyanshu Tiwari" }],
  creator: "Priyanshu Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshutiwari.dev",
    title: "Priyanshu Tiwari - Full-Stack Blockchain Developer",
    description: "Building scalable and secure decentralized applications",
    siteName: "Priyanshu Tiwari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Tiwari - Full-Stack Blockchain Developer",
    description: "Building scalable and secure decentralized applications",
    creator: "@priyanshudotsol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme"
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

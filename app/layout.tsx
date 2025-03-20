import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SettingsProvider } from "@/hooks/use-settings"

export const metadata: Metadata = {
  title: "lineal",
  description: "Inspect and analyze metadata from any website with lineal",
  metadataBase: new URL("https://line.al"),
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "lineal",
  },
  openGraph: {
    type: "website",
    title: "lineal",
    description: "Inspect and analyze metadata from any website with lineal",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "lineal logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "lineal",
    description: "Inspect and analyze metadata from any website with lineal",
    images: ["/web-app-manifest-512x512.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-y-auto">
      <body>
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  )
}



import './globals.css'
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Cormorant_Garamond, IBM_Plex_Sans_Arabic, Tajawal } from "next/font/google";
import "./globals.css";
import { PreferencesProvider } from "@/lib/i18n";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackToTop } from "@/components/back-to-top";
import { siteConfig } from "@/data/site";
import { CursorGlow } from "@/components/ui/cursor-glow";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ar",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-header-ar",
});

// Metadata configuration for SEO and Browser Icons
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Abdullah Selim | E-Commerce Systems Engineer",
    template: "%s | Abdullah Selim"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  // Adding the icons you requested
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // Manifest and Apple specific settings
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Abdullah',
    statusBarStyle: 'default',
    capable: true,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Abdullah Selim | E-Commerce Systems Engineer",
    description: siteConfig.description,
    siteName: "Abdullah Selim Portfolio",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Selim | E-Commerce Systems Engineer",
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Viewport settings for theme and responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
  colorScheme: "dark"
};

// Structured Data (JSON-LD) for SEO
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location,
    addressCountry: "EG"
  },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  // cSpell:disable-next-line
  knowsAbout: ["Salla", "Shopify", "WooCommerce", "Next.js", "NestJS"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" data-locale="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${cormorant.variable} ${ibmPlexArabic.variable} ${tajawal.variable} antialiased`}>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <PreferencesProvider>
          <CursorGlow />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </PreferencesProvider>
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

// Optimized font loading with Next.js
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
});

// Site URL for metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://panka.digital";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a12" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a12" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Panka - Agencia Digital | Diseño Web y Branding",
    template: "%s | Panka",
  },
  description: "Diseño digital para negocios que florecen. Creamos webs rápidas, económicas y personalizadas que convierten visitantes en clientes.",
  keywords: ["diseño web", "agencia digital", "desarrollo web", "branding", "páginas web", "diseño gráfico", "marketing digital"],
  authors: [{ name: "Panka", url: siteUrl }],
  creator: "Panka",
  publisher: "Panka",
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
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    title: "Panka - Agencia Digital | Diseño Web y Branding",
    description: "Diseño digital para negocios que florecen. Creamos webs rápidas, económicas y personalizadas.",
    type: "website",
    locale: "es_ES",
    siteName: "Panka",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Panka - Agencia Digital",
    description: "Diseño digital para negocios que florecen.",
    creator: "@panka_digital",
  },
};

// JSON-LD Structured Data for Organization
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Panka",
  description: "Agencia digital especializada en diseño web y branding",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [
    "https://twitter.com/panka_digital",
    "https://instagram.com/panka_digital",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={jakarta.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Static gradient background */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(62, 228, 172, 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(5, 150, 105, 0.1), transparent),
              radial-gradient(ellipse 50% 30% at 20% 80%, rgba(4, 120, 87, 0.1), transparent),
              linear-gradient(180deg, #0a0a12 0%, #0f0f1a 50%, #0a0a12 100%)
            `
          }}
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}

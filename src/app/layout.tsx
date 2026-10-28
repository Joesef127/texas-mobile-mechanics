import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["italic"],
  variable: "--font-head",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Texas Mobile Mechanics | www.TexMM.com Dallas Fort Worth Arlington",
    template: "%s",
  },
  description:
    "Texas Mobile Mechanics www.TexMM.com Dallas Mobile Mechanic, Arlington Mobile Mechanic, Irving Mobile Mechanic, Hurst, Euless, Bedford, Garland, North Richland Hills, Keller, Grapevine, Saginaw",
  keywords: [
    "Assistance",
    "Auto",
    "Car",
    "Mechanic",
    "Mobile",
    "Repair",
    "Roadside",
    "Shop",
    "Towing",
  ],
  verification: {
    google: "TuZ0hQNgJPUGx10A2I6H9L4ttxOBQ8J4V7S_XupZ3Qw",
  },
  openGraph: {
    title: "Texas Mobile Mechanics www.TexMM.com Dallas Fort Worth Arlington",
    description:
      "Texas Mobile Mechanics www.TexMM.com Dallas Mobile Mechanic, Arlington Mobile Mechanic, Irving Mobile Mechanic, Hurst, Euless, Bedford, Garland, North Richland Hills, Keller, Grapevine, Saginaw",
    url: siteConfig.domain,
    siteName: "TexasMobileMechanics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Mobile Mechanics www.TexMM.com Dallas Fort Worth Arlington",
    description:
      "Texas Mobile Mechanics www.TexMM.com Dallas Mobile Mechanic, Arlington Mobile Mechanic, Irving Mobile Mechanic, Hurst, Euless, Bedford, Garland, North Richland Hills, Keller, Grapevine, Saginaw",
  },
  icons: {
    icon: "/TMM.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.domain,
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    streetAddress: siteConfig.streetAddress,
  },
  telephone: siteConfig.phoneDisplay,
};

const webSiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "TexasMobileMechanics",
  url: siteConfig.domain,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>
          {children}
          <ContactSection />
        </main>
        <Footer />
      </body>
    </html>
  );
}

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#14161A" },
  ],
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

const themeScript = `(function(){try{var d=document.documentElement,t=localStorage.getItem("tmm-theme"),dark=t==="dark"||(!t&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(dark){d.setAttribute("data-theme","dark");d.style.colorScheme="dark";d.style.backgroundColor="#101216";}else{d.setAttribute("data-theme","light");d.style.colorScheme="light";d.style.backgroundColor="#F6F6F4";}}catch(e){}})();`;

const criticalThemeStyle = `
html {
  background-color: #F6F6F4;
  color: #16181C;
  color-scheme: light;
}
html[data-theme="dark"] {
  background-color: #101216 !important;
  color: #F1F1EF !important;
  color-scheme: dark !important;
  --bg: #101216;
  --surface: #181B20;
  --text: #F1F1EF;
  --ink: #14161A;
  --ink-text: #F4F4F2;
  --ink-line: #2C3037;
}
html[data-theme="dark"] body {
  background-color: #101216 !important;
  color: #F1F1EF !important;
}
html[data-theme="dark"] .logo-img {
  filter: invert(1);
}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: criticalThemeStyle,
          }}
        />
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
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
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

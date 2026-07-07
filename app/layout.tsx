import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import {
  INSTAGRAM_URL,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const TITLE = "Play & Pause: Curated Playdates & Creative Experiences in Jaipur";

export const viewport: Viewport = {
  themeColor: "#fef6ea",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Play & Pause",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Play and Pause",
    "playdates Jaipur",
    "creative experiences for kids",
    "mom and child activities",
    "toddler playgroup Jaipur",
    "screen-free play",
    "children 1.5 years and up Jaipur",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: SITE_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: SITE_LOCATION,
  sameAs: [INSTAGRAM_URL],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} min-h-screen antialiased`}
      >
        <Script
          id="business-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

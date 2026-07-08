import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { TESTIMONIALS } from "@/lib/content";
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
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: SITE_EMAIL,
  telephone: PHONE_DISPLAY,
  image: `${SITE_URL}/hero4.jpg`,
  logo: `${SITE_URL}/logo.png`,
  priceRange: "₹499",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  areaServed: SITE_LOCATION,
  sameAs: [INSTAGRAM_URL],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: TESTIMONIALS.length,
    bestRating: "5",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: t.quote,
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} min-h-screen antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

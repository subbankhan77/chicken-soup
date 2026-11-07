import { Fraunces, Manrope } from "next/font/google";
import { shop } from "@/data/shop";
import { products } from "@/data/products";
import { itemLabel } from "@/lib/contact";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = `${shop.name} — Chicken & Mutton Soup, Momos & Rolls in Jhotwara, Jaipur`;
const description = `${shop.description} Order on WhatsApp or call us directly. Open ${shop.locations.map((l) => l.time).join(" and ")}.`;

export const metadata = {
  metadataBase: new URL(shop.siteUrl),
  title: {
    default: title,
    template: `%s | ${shop.name}`,
  },
  description,
  keywords: [
    "chicken soup Jaipur",
    "mutton soup Jaipur",
    "soup shop Jhotwara",
    "chicken momos",
    "chicken chowmein",
    "egg bhurji",
    "chicken roll",
    "egg roll",
    "food near me Jhotwara",
    "order food on WhatsApp",
    shop.name,
  ],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: shop.name,
    images: [{ url: "/images/hero.jpg", width: 2000, height: 1333, alt: "A bowl of hot, fresh soup" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#0c0907",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: shop.name,
  description: shop.description,
  servesCuisine: ["Soups", "Chinese", "Fast Food"],
  telephone: shop.phone,
  url: shop.siteUrl,
  hasMap: shop.locations.map((l) => l.mapsUrl),
  address: shop.locations.map((l) => l.address),
  openingHours: shop.locations.map((l) => `Mo-Su ${l.opens}-${l.closes}`),
  hasMenu: {
    "@type": "Menu",
    hasMenuItem: products.map((p) => ({
      "@type": "MenuItem",
      name: itemLabel(p),
      description: p.description,
      offers: { "@type": "Offer", price: p.price, priceCurrency: "INR" },
    })),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

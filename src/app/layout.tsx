import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kaveri Kiinteistöpalvelut",
    template: "%s | Kaveri Kiinteistöpalvelut",
  },
  description:
    "Professional property maintenance services in Vantaa, Helsinki and Espoo. We provide cleaning, garden care, snow removal and property maintenance for businesses, housing companies and private customers.",
  keywords: [
    "Kaveri Kiinteistöpalvelut",
    "Property Maintenance Finland",
    "Cleaning Services Helsinki",
    "Office Cleaning",
    "Garden Care",
    "Snow Removal",
    "Property Maintenance",
    "Vantaa",
    "Helsinki",
    "Espoo",
  ],
  authors: [{ name: "Kaveri Kiinteistöpalvelut" }],
  creator: "Kaveri Kiinteistöpalvelut",
  publisher: "Kaveri Kiinteistöpalvelut",
  metadataBase: new URL("https://www.kaverikp.fi"),
openGraph: {
  title: "Kaveri Kiinteistöpalvelut",
  description:
    "Professional property maintenance services across Vantaa, Helsinki and Espoo.",
  url: "https://www.kaverikp.fi",
  siteName: "Kaveri Kiinteistöpalvelut",
  locale: "fi_FI",
  type: "website",
  images: [
    {
      url: "/images/About.jpg",
      width: 1200,
      height: 630,
      alt: "Kaveri Kiinteistöpalvelut",
    },
  ],
},
}
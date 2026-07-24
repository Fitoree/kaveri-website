import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  icons: {
    icon: "/images/icoon.png",
    shortcut: "/images/icoon.png",
    apple: "/images/icoon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://martagea5.github.io/marta-gea-portfolio";

const title = "Marta Gea — Diseño de Interiores & Producto";
const description =
  "Portfolio de Marta Gea Almudever. Diseño de interiores, producto y visualización 3D. Valencia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Marta Gea Almudever",
    images: [
      {
        url: `${basePath}/img/marta-hero.jpg`,
        width: 768,
        height: 1024,
        alt: "Marta Gea Almudever — Diseño de interiores y producto",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${basePath}/img/marta-hero.jpg`],
  },
  icons: {
    icon: [
      { url: `${basePath}/icon.svg`, type: "image/svg+xml" },
    ],
    apple: `${basePath}/img/marta-hero.jpg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

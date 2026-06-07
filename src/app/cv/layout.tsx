import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Marta Gea — CV",
  description:
    "Currículum Vitae de Marta Gea Almudéver. Diseñadora de Interiores y Producto.",
  robots: { index: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}

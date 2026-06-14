import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Athar Ramadhana Dermawan — Portfolio",
  description:
    "Personal portfolio of Athar Ramadhana Dermawan — Business Analyst, Founder & CEO of PT Pilar Agrosinergi Nusantara, and Information Systems & Technology student at Institut Teknologi Bandung.",
  keywords: ["Athar Ramadhana Dermawan", "Business Analyst", "Portfolio", "ITB", "Product Management"],
  authors: [{ name: "Athar Ramadhana Dermawan" }],
  openGraph: {
    title: "Athar Ramadhana Dermawan — Portfolio",
    description: "Business Analyst · Founder & CEO · Technology Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>{children}</body>
    </html>
  );
}

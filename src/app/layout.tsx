import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@app/components/layout/navbar";
import Footer from "@app/components/layout/footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Audiophile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

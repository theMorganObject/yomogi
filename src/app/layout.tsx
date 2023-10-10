import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel_Decorative } from "next/font/google";

export const metadata: Metadata = {
  title: "YoMogi",
  description: "A japanese fusion food ordering app",
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "500",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorantGaramond.className}>
        {children}
        <div id="overlays"></div>
      </body>
    </html>
  );
}

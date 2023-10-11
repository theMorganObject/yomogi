import "./globals.css";
import type { Metadata } from "next";
import { cormorantGaramond } from "@/components/utils/fonts";

export const metadata: Metadata = {
  title: "YoMogi",
  description: "A japanese fusion food ordering app",
};

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

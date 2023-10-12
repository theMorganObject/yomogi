import "./globals.css";
import type { Metadata } from "next";
import {
  cormorantGaramond,
  cinzelDecorative,
  montserrat,
} from "@/components/utils/fonts";

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
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${cinzelDecorative.variable} ${montserrat.variable}`}
    >
      <body>
        {children}
        <div id="overlays"></div>
      </body>
    </html>
  );
}

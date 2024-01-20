import './globals.css';
import type { Metadata } from 'next';
import {
  cormorantGaramond,
  cinzelDecorative,
  montserrat,
} from '@/components/utils/fonts';
import Footer from '@/components/Layout/Footer';

export const metadata: Metadata = {
  title: 'YoMogi Diner & Cafe',
  description: 'A japanese fusion food ordering app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${cormorantGaramond.variable} ${cinzelDecorative.variable} ${montserrat.variable}`}
    >
      <body>
        {children}
        <div id='overlays'></div>
        <Footer />
      </body>
    </html>
  );
}

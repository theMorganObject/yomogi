import {
  Cinzel_Decorative,
  Cormorant_Garamond,
  Montserrat,
} from "next/font/google";

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: "500",
});
export const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: "700",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

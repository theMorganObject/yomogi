import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      extend: {
        colors: {
          "yomogi-0": "#e0f7ec",
          "yomogi-1": "#d4f3dc",
          "yomogi-2": "#b8dcbb",
          "yomogi-3": "#95bf89",
          "yomogi-4": "#90be76",
          "yomogi-5": "#81af6d",
          "yomogi-6": "#6e975a",
          "yomogi-7": "#63885f",
          "yomogi-8": "#446639",
          "yomogi-9": "#2e5031",
          "yomogi-10": "#243d1f",
          "yomogi-11": "#1d3218",
          "mysticgrape-0": "#c3adff",
          "mysticgrape-1": "#ba93fe",
          "mysticgrape-2": "#b58bfc",
          "mysticgrape-3": "#a685f0",
          "mysticgrape-4": "#9e80fc",
          "mysticgrape-5": "#8a62c2",
          "mysticgrape-6": "#7954b1",
          "mysticgrape-7": "#673c97",
          "mysticgrape-8": "#55208d",
          "mysticgrape-9": "#4f188a",
          "mysticgrape-10": "#4a1a6d",
          "mysticgrape-11": "#40135c",
        },
      },
    },
  },
  plugins: [],
};
export default config;

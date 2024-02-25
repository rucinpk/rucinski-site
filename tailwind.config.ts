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
        "gradient-radial-alt": "radial-gradient(circle at 100% 250%, #7700ff, #7700ff 50%, #081b29 75%, rgba(0,0,0,0) 75%)",
      },
      colors: {
        primary: "#7700ff",
        secondary: '#081b29',
        accent: "#F45A38",
        tertiary: "#E3E8EA",
        text: "#ededed",
      },
      fontSize: {
        "7xl": "5.6rem",
      },
      width: {
        "wide": "34.5rem"
      }
    },
  },
  plugins: [],
};
export default config;

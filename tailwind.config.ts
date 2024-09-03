import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        wdc:{
          background: "#FFFBF5",
          banner: "#FFCBCB",
          input: "#EAE6DE",
        }
      }
    },
  },
  plugins: [],
};
export default config;

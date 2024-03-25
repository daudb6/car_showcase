import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-bg": "url('/hero-bg.png')",
      },
      colors:{
        'black-100':'#2b2c35',
          
        'primary-blue':{
          DEFAULT:'#2b59ff',
        100:'f5f8ff',
        },
      }
    },
  },
  plugins: [],
};
export default config;

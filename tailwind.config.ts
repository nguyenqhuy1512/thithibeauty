import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      ["2xl"] : "1530px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily:{
      Grey : ['Grey Qo'],
      Lora : ['Lora'],
      Cormorant: ['Cormorant'],
      Allura: ['Allura'],
      GVibes: ['Great Vibes'],
    }



  },
  plugins: [
    require('daisyui'),
  ],
  daisy:{
    themes: ["winter"]
  }
};
export default config;

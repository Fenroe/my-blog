/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        schemewhite: "#fcfcfc",
        schemegold: "#cdc4a7",
        schemenavyblue: "#858aba",
        schemedarkblue: "#5c61af",
        schemedarkgray: "#9e9097",
        schemeblack: "#1e1c25",
      },
      letterSpacing: {
        button: "0.15rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

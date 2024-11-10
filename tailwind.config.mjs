/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bash: "#4EAA25",
        database: "#01B4E4",
        git: "#F05032",
        java: "#F7DF1E",
        javascript: "#F7DF1E",
        linux: "#FCC624",
        nodejs: "#5FA04E",
        python: "#3776AB",
        react: "#61DAFB",
        vuejs: "#4FC08D",
        uth: "#61ce70",
        coursera: "#0056d2",
      },
    },
  },
  plugins: [],
};

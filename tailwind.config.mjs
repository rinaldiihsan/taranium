/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
      },
      screens: {
        handphone: '375px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1920px',
      },
    },
  },
  plugins: [],
};

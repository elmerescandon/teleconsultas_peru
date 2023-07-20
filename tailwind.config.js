/** @type {import('tailwindcss').Config} */
module.exports = {
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
      color: {
        "sky-blue-sea": "var(--pallette-sky-blue-sea)",
        "sky-blue": "var(--pallette-sky-blue)",
        "soft-green": "var(--pallette-soft-green)",
        gray: "var(--pallette-gray)",
        white: "var(--pallette-white)",
        black: "var(--pallette-black)",
      },
    },
  },
  plugins: [],
};

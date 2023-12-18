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
            colors: {
                "basic-white": "var(--basic-white)",
                "basic-black": "var(--basic-black)",
                "neutral-50": "var(--neutral-50)",
                "neutral-100": "var(--neutral-100)",
                "neutral-200": "var(--neutral-200)",
                "neutral-300": "var(--neutral-300)",
                "neutral-400": "var(--neutral-400)",
                "neutral-500": "var(--neutral-500)",
                "neutral-600": "var(--neutral-600)",
                "neutral-700": "var(--neutral-700)",
                "neutral-800": "var(--neutral-800)",
                "neutral-900": "var(--neutral-900)",

                "brand-50": "var(--brand-50)",
                "brand-100": "var(--brand-100)",
                "brand-200": "var(--brand-200)",
                "brand-300": "var(--brand-300)",
                "brand-400": "var(--brand-400)",
                "brand-500": "var(--brand-500)",
                "brand-600": "var(--brand-600)",
                "brand-700": "var(--brand-700)",
                "brand-800": "var(--brand-800)",
                "brand-900": "var(--brand-900)",

                "teal-600": "var(--teal-600)",
                "teal-400": "var(--teal-400)",
                "teal-50": "var(--teal-50)",
                "amber-600": "var(--amber-600)",
                "amber-400": "var(--amber-400)",
                "amber-50": "var(--amber-50)",
                "rose-600": "var(--rose-600)",
                "rose-400": "var(--rose-400)",
                "rose-50": "var(--rose-50)",

                "salufy-blue": "var(--salufy-blue)",
                "salufy-gray": "var(--salufy-gray)",
                "salufy-psycho": "var(--salufy-psycho)",
                "salufy-psycho-light": "var(--salufy-psycho-light)",
                "salufy-psycho-strong": "var(--salufy-psycho-strong)",
                "salufy-nutri": "var(--salufy-nutri)",
                "salufy-nutri-light": "var(--salufy-nutri-light)",
                "salufy-nutri-strong": "var(--salufy-nutri-strong)",
            },
            keyframes: {
                "open-menu": {
                    "0%": { transform: "translateY(-100%)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
            animation: {
                "open-menu": "open-menu 0.6s ease-out",
            },
        },
    },
    plugins: [],
};

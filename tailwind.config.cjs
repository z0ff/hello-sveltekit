/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp'), require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                mylight: {
                    "primary": "#84cc16",
                    "secondary": "#60a5fa",
                    "accent": "#c084fc",
                    "neutral": "#e7e5e4",
                    "base-100": "#f5f5f4",
                    "info": "#4f46e5",
                    "success": "#86efac",
                    "warning": "#facc15",
                    "error": "#f43f5e",
                },
                mydark: {
                    "primary": "#84cc16",
                    "secondary": "#60a5fa",
                    "accent": "#c084fc",
                    "base-100": "#1c1917",
                    "neutral": "#292524",
                    "info": "#bfdbfe",
                    "success": "#86efac",
                    "warning": "#facc15",
                    "error": "#f43f5e",
                },
            }
        ]
    }
}

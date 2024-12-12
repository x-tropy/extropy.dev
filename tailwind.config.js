/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                midnight: "#043f2e",
                daylight: "#eef2e3",
                grass: "#C8F169",
                greenland: "#78C51C",
                forrest: "#2A6F2B"
            },
            fontSize: {
                "3xl": "52px",
                "2xl": "40px",
                "xl": "26px",
                "lg": "22px",
                "md": "18px",
                "sm": "16px"
            }
        },
        fontFamily: {
            serif: ["SourceSerifPro"],
            sans: [
                "InterTight",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Arial",
                "Helvetica",
                "Helvetica Neue",
                "sans-serif",
            ],
            mono: [
                "JetBrainsMono",
                "Consolas",
                "Menlo",
                "Monaco",
                "Andale Mono",
                "Ubuntu Mono",
                "monospace",
            ],
        },

    },
    plugins: [],
}

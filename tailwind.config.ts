import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-dark": "#151c2c",
                "bg-soft-dark": "#182237",
                "active-dark": "#2e374a",
                "text-dark": "white",
                "text-soft-dark": "#b7bac1",

                bg: "#151c2c",
                "bg-soft": "#182237",
                active: "#2e374a",
                text: "white",
                "text-soft": "#b7bac1",
            },
        },
    },
    plugins: [],
}
export default config

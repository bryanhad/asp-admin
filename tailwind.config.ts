import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "bg-dark": "#151c2c",
                "bg-soft-dark": "#182237",
                "active-dark": "#2e374a",
                "text-dark": "#f3f4f6",
                "text-soft-dark": "#b7bac1",

                bg: "white",
                "bg-soft": "#f9fafb",
                active: "#e5e7eb",
                text: "#475569",
                "text-soft": "#9ca3af",
            },
        },
    },
    plugins: [],
}
export default config

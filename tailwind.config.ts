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
                "label-color": "#64748b",

                "success-dark": "#16a34a",

                "bg-dark": "#151c2c",
                "bg-soft-dark": "#182237",
                "active-dark": "#2e374a",
                "text-dark": "#f3f4f6",
                "text-soft-dark": "#b7bac1",
                "focus-dark": "#94a3b8",

                success: "#22c55e",

                bg: "white",
                "bg-soft": "#f9fafb",
                active: "#e5e7eb",
                text: "#475569",
                "text-soft": "#9ca3af",
                "focus": "#94a3b8",
            },
        },
    },
    plugins: [],
}
export default config

import type { Config } from "tailwindcss"
import { withUt } from "uploadthing/tw";

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
                "label-color": "#94a3b8",
                error: "#ef4444",

                "success-dark": "#16a34a",
                "edit-dark": "#0f766e",
                "edit-darker-dark": "#115e59",
                "delete-dark": "#991b1b",
                "cancel-dark": "#6b7280",

                "bg-dark": "#151c2c",
                "bg-soft-dark": "#182237",
                "active-dark": "#2e374a",
                "text-dark": "#f3f4f6",
                "text-soft-dark": "#b7bac1",
                "focus-dark": "#64748b",

                success: "#22c55e",
                edit: "#06b6d4",
                "edit-darker": "#0891b2",
                delete: "#dc2626",
                cancel: "#e5e7eb",

                bg: "white",
                "bg-soft": "#f9fafb",
                active: "#e5e7eb",
                text: "#475569",
                "text-soft": "#9ca3af",
                "focus": "#d1d5db",
            },
        },
    },
    plugins: [],
}

export default withUt(config)
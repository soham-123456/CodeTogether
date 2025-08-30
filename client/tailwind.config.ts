/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{jsx,tsx}", "./*.html"],
    theme: {
        extend: {
            colors: {
                // Purple-focused dark theme with vibrant accents
                dark: "#0F0F23",
                darkHover: "#1A1A2E",
                darkLighter: "#16213E",
                light: "#E8F4FD",
                primary: "#A855F7", // purple-500
                primaryHover: "#9333EA", // purple-600
                secondary: "#EC4899", // pink-500
                accent: "#8B5CF6", // violet-500
                warning: "#F59E0B", // amber-500
                danger: "#EF4444", // red-500
                success: "#10B981", // emerald-500
                purple: "#A855F7", // purple-500
                orange: "#F97316", // orange-500
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                "up-down": "up-down 2s ease-in-out infinite alternate",
                "float": "float 3s ease-in-out infinite",
                "glow-pulse": "glow-pulse 2s ease-in-out infinite",
                "shimmer": "shimmer 2s linear infinite",
                "spin-slow": "spin-slow 8s linear infinite",
            },
        },
    },
    plugins: [],
}

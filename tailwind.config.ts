import type { Config } from "tailwindcss";
export default {
    darkMode: "class",
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
        colors: {
            coffee: {
            light: "#d7b899",
            DEFAULT: "#8b5e3c",
            dark: "#3f2a1c",
            },
        },
        },		
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("tailwindcss-animate"),
    ],
} satisfies Config;

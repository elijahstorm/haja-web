/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{svelte,html,ts}"],
	theme: {
		extend: {
			colors: {
				black: "#000000",
				white: "#f8f9fa",
				brand: {
					50: "#afdafd",
					100: "#9cd1fc",
					200: "#88c8fc",
					300: "#74befb",
					400: "#60b5fb",
					500: "#41a7fa",
					600: "#38a3fa",
					700: "#2499f9",
					800: "#1090f9",
					900: "#0986ef"
				}
			},
			fontFamily: "Roboto, sans-serif"
		}
	},
	plugins: [require("@tailwindcss/forms")]
}

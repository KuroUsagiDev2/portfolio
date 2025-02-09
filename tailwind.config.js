import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
		"./storage/framework/views/*.php",
		"./resources/views/**/*.blade.php",
		"./resources/js/**/*.vue",
		"./node_modules/flowbite/**/*.js",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0fdfa",
					100: "#ccfbf1",
					200: "#99f6e4",
					300: "#5eead4",
					400: "#2dd4bf",
					500: "#14b8a6",
					600: "#0d9488",
					700: "#0f766e",
					800: "#115e59",
					900: "#134e4a",
					950: "#042f2e",
				},
			},
		},
		fontFamily: {
			body: ["Nunito Sans"],
			sans: ["Nunito Sans"],
		},
	},

	plugins: [forms, require("flowbite/plugin"), require("tailwind-scrollbar")({ nocompatible: true })],
};

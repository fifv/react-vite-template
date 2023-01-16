/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'outline': '0px 0px 4px 0px rgb(136, 136, 136)',
			},
		},
	},
	plugins: [],
}

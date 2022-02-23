const {plugin} = require("next/dist/build/webpack/config/helpers");
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./slices/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		aspectRatio,
		plugin(function ({matchUtilities, theme}) {
			matchUtilities(
				{
					tab: (value) => ({
						tabSize: value
					}),
				},
				{values: theme('tabSize')}
			)
		})
	],
}

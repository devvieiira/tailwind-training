import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				app: "minmax(18rem, 20rem) 1fr",
				profile: "max-contect 1fr max-content",
			},
			colors: {
				teste: "#8257e6",
			},
		},
	},
	plugins: [],
};
export default config;

import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: "./src/components",
			$lib: "./src/lib",
			$stores: "./src/stores",
			$utils: "./src/utils",
		},
		files: {
			assets: "./static",
		},
	},
	preprocess: preprocess(),
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "alt-shift",
			toggleButtonPos: "bottom-left",
			alwaysOnTop: false,
		},
	},
};

export default config;

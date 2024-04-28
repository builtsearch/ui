import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { compile } from "svelte/compiler";

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5181,
	},
});

import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: ["iconify-icon"],
		},
	},
	test: {
		include: ["tests/*unit.(test|spec).[jt]s"],
		environment: "jsdom",
		alias: [{ find: /^svelte$/, replacement: "svelte/internal" }],
	},
}

export default config

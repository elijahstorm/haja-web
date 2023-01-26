import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"

const dev = process.env.NODE_ENV === "development"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			hostineSite: "data",
			precompress: false,
			fallback: "index.html"
		}),
		paths: {
			base: dev ? "" : "/haja-web"
		}
	}
}

export default config

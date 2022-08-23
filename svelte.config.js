import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

const dev = process.env.NODE_ENV === "development"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		methodOverride: {
			allowed: ["POST", "PUT", "DELETE"]
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			hostineSite: "data",
			precompress: false,
			fallback: "index.html"
		}),
		prerender: {
			default: true
		},
		trailingSlash: "always",
		paths: {
			base: dev ? "" : "/haja-web"
		}
	}
}

export default config

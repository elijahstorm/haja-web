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
			pages: "docs",
			assets: "docs",
			hostineSite: "data",
			fallback: "index.html"
		}),
		paths: {
			base: dev ? "" : "/haja-web"
		}
	}
}

export default config

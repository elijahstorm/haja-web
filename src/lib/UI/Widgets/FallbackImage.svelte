<script lang="ts">
	import { base } from "$app/paths"

	export let fallback: string = `${base}/404.png`
	export let src: string = fallback
	export let alt: string
	export let cover = false

	const handleError = (e) => (e.target.src = fallback)
</script>

<img class:cover {src} {alt} on:error={handleError} />

<style>
	img {
		width: 100%;
		height: 100%;
	}

	.cover {
		object-fit: cover;
	}
</style>

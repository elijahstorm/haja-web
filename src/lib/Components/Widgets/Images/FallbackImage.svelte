<script lang="ts">
	import { base } from "$app/paths"

	export let fallback: string = `${base}/404.png`
	export let src: string = fallback
	export let alt: string
	export let cover = false
	export let tailwind = ""

	const handleError = (e) => (e.target.src = fallback)
</script>

<img
	class="w-full h-full {tailwind}"
	class:object-cover={cover}
	{src}
	{alt}
	on:error={handleError}
/>

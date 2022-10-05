<script lang="ts">
	import GoogleSpin from "svelte-loading-spinners/dist/ts/GoogleSpin.svelte"

	export let size: number = 3
	export let top: number = 0
	export let right: number = 0
	export let bottom: number = 0
	export let left: number = 0

	let padding = [top, right, bottom, left]

	let style = ""
	$: style = `padding: ${padding.map((p) => `${p}rem`).join(" ")};`
</script>

<div {style}>
	<GoogleSpin size={size + "rem"} />
</div>

<style>
	div {
		margin: auto;
		width: 3rem;
		height: 3rem;
	}
</style>

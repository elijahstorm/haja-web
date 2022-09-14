<script>
	import DraggableDraw from "svelte-draggable-draw"
	let visible = true
	let maxVH = 90
	let minVH = 85

	function switchVisible() {
		visible = !visible
	}
</script>

<button on:click={switchVisible}>Click me to open</button>
<DraggableDraw bind:visible {maxVH} {minVH}>
	<span slot="left" on:click={switchVisible}>Cancel</span>
	<span slot="right" on:click={switchVisible}>Submit</span>

	<div>
		<h1>Content</h1>
		<p>Can be injected here</p>
	</div>
</DraggableDraw>

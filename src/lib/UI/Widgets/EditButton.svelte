<script lang="ts">
	import type { AllContentTypes } from "$lib/content/Content"
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import DraggableDraw from "svelte-draggable-draw"
	import GlassyButton from "./GlassyButton.svelte"

	export let entity: Promise<AllContentTypes>
	export let isTeam: boolean = false

	let visible = true
	let maxVH = 90
	let minVH = 65

	function toggleVisible() {
		visible = !visible
	}

	const save = () => {
		// if (browser) goto(`${base}/${isTeam ? "team" : "user"}/${source}/edit`)
	}
</script>

<GlassyButton callback={toggleVisible} />

<DraggableDraw bind:visible {maxVH} {minVH}>
	<span slot="left" on:click={toggleVisible}>Cancel</span>
	<span slot="right" class="primary" on:click={save}>Submit</span>

	<EditableContentPage bind:content={entity} {isTeam} />
</DraggableDraw>

<style>
	.primary {
		color: var(--primary);
	}
</style>

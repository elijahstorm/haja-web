<script lang="ts">
	import type { AllContentTypes } from "$lib/content/Content"
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import DraggableModal from "./DraggableModal.svelte"
	import GlassyButton from "./GlassyButton.svelte"

	export let entity: Promise<AllContentTypes>
	export let isTeam: boolean = false

	let maxVH = 70
	let minVH = 65
	let requestSave

	const save = (action: VoidFunction) => () => {
		requestSave()
		action()
	}

	const keypress = (action: VoidFunction) => (e: KeyboardEvent) => {
		e.stopPropagation()
		e.preventDefault()
		if (e.key === "Enter") {
			action()
		}
	}
</script>

<DraggableModal let:update {maxVH} {minVH}>
	<div slot="button">
		<GlassyButton callback={update("open")} />
	</div>

	<span
		slot="left"
		on:click|stopPropagation={update("closed")}
		on:keypress={keypress(update("closed"))}>Cancel</span
	>
	<span
		slot="right"
		class="text-brand-500"
		on:click|stopPropagation={save(update("closed"))}
		on:keypress={keypress(save(update("closed")))}>Submit</span
	>

	<EditableContentPage bind:content={entity} {isTeam} bind:requestSave />
</DraggableModal>

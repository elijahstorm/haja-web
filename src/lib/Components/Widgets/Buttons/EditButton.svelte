<script lang="ts">
	import type { AllContentTypes } from "$lib/Components/Content/Content"
	import EditableContentPage from "$lib/Components/Content/EditableContentPage.svelte"
	import DraggableModal, {
		type UpdateFunction,
	} from "$lib/Components/Widgets/Layouts/DraggableModal.svelte"
	import GlassyButton from "$lib/Components/Widgets/Buttons/GlassyButton.svelte"

	export let entity: AllContentTypes
	export let isTeam: boolean = false

	let maxVH = 70
	let minVH = 65
	let requestSave: () => Promise<void>

	let update: UpdateFunction = () => () => {}

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

<DraggableModal bind:update {maxVH} {minVH}>
	<div slot="button">
		<GlassyButton callback={update("open")} />
	</div>

	<button
		slot="left"
		on:click|stopPropagation={update("closed")}
		on:keypress={keypress(update("closed"))}
	>
		Cancel
	</button>

	<button
		slot="right"
		class="text-brand-500"
		on:click|stopPropagation={save(update("closed"))}
		on:keypress={keypress(save(update("closed")))}
	>
		Submit
	</button>

	<EditableContentPage bind:content={entity} {isTeam} bind:requestSave />
</DraggableModal>

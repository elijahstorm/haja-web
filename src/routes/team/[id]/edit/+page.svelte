<script lang="ts">
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"

	export let data
	export let errors

	let { team } = data
	$: ({ team } = data)
</script>

<Casing>
	<EditableContentPage bind:content={team} {errors} isTeam={true}
		>editng team!</EditableContentPage
	>
</Casing>

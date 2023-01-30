<script lang="ts">
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"

	export let data
	export let errors: string | null

	let { user } = data
	$: ({ user } = data)

	let saveFunction
</script>

<Casing>
	<EditableContentPage bind:content={user} {errors} isTeam={false} bind:requestSave={saveFunction}
		>editing!</EditableContentPage
	>
</Casing>

<script lang="ts">
	import ContentContainer from "$lib/Components/Content/ContentContainer.svelte"

	export let data
	export let errors: string | null

	let { todo, source, isTeam } = data
	$: ({ todo, source, isTeam } = data)
</script>

<ContentContainer bind:content={todo} {errors} {source} {isTeam} />

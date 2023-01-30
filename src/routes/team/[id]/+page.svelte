<script lang="ts">
	import ContentContainer from "$lib/content/ContentContainer.svelte"

	export let data
	export let errors

	let { team } = data
	$: ({ team } = data)
</script>

<ContentContainer bind:content={team} {errors} isTeam={true} />

<script lang="ts">
	import ContentContainer from "$lib/Content/ContentContainer.svelte"

	export let data
	export let errors: string | null

	let { user } = data
	$: ({ user } = data)
</script>

<ContentContainer bind:content={user} {errors} isTeam={false} />

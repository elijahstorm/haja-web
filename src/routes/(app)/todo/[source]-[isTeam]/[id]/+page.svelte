<script lang="ts">
	import ContentContainer from "$lib/Components/Content/ContentContainer.svelte"
	import TeamCard from "$lib/Components/Content/Team/TeamCard.svelte"
	import { getTeam } from "$lib/Components/Content/Team/TeamContent"
	import { getUser } from "$lib/Components/Content/User/UserContent"
	import HorizontalUserCard from "$lib/Components/Content/User/HorizontalUserCard.svelte"
	import type { PageData } from "./$types"

	export let data: PageData
	export let errors: string | null

	let { todo, source, isTeam } = data
	$: ({ todo, source, isTeam } = data)
</script>

<ContentContainer bind:content={todo} {errors} {source} {isTeam}>
	{#if isTeam}
		{#await getTeam({ id: source }) then team}
			<div class="flex flex-col gap-4">
				<TeamCard {team} />
			</div>
		{/await}
	{:else}
		{#await getUser({ id: source }) then user}
			{#if typeof user !== "string"}
				<div class="flex flex-col gap-4">
					<HorizontalUserCard {user} />
				</div>
			{/if}
		{/await}
	{/if}
</ContentContainer>

<script lang="ts">
	import type { TeamContentConfig } from "./TeamContent"
	import TeamCard from "./TeamCard.svelte"

	export let teams: TeamContentConfig[] | string = []
</script>

{#if typeof teams === "string" || !Array.isArray(teams)}
	{teams}
{:else if teams.length == 0}
	No teams joined!
{:else}
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each teams as team (team.id)}
			<TeamCard {team} />
		{/each}
	</div>
{/if}

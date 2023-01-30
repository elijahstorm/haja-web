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
	{#each teams as team (team.id)}
		<div class="my-4">
			<TeamCard {team} />
		</div>
	{/each}
{/if}

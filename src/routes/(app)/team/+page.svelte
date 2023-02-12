<script lang="ts">
	import { base } from "$app/paths"
	import TeamList from "$lib/Components/Content/Team/TeamList.svelte"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"
	import ProtectedPage from "$lib/Components/PageContainers/ProtectedPage.svelte"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import ItemShowcaseCard from "$lib/Components/Widgets/Layouts/ItemShowcaseCard.svelte"
	import { getRecommendedTeams } from "$lib/Components/Content/Team/SearchTeams"
	import { getTeamList } from "$lib/Components/Content/Team/TeamList"

	const teamList = getTeamList({})
</script>

<ProtectedPage>
	<Casing>
		<div class="space-y-6">
			<ListWithActionAndTitle title="My Teams">
				{#await teamList then teams}
					<TeamList {teams} />
				{/await}

				<a
					slot="action"
					class="btn btn-primary text-xs pl-2 pr-3 py-2 content-center h-max"
					href="{base}/team/create"
				>
					+
					<span class="inline sm:hidden"> New </span>
					<span class="hidden sm:inline"> Create A Team </span>
				</a>
			</ListWithActionAndTitle>

			<ListWithActionAndTitle title="Recommended Teams">
				{#await teamList then teams}
					{#if typeof teams !== "string"}
						{#await getRecommendedTeams({ exclude: teams.map((team) => team.id) })}
							<Loader top={4} />
						{:then teams}
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								{#if typeof teams !== "string"}
									{#each teams as team (team.id)}
										<ItemShowcaseCard
											id={team.id}
											title={team.title}
											picture={team.picture}
											subtext={team.caption}
											callToAction="Join {team.users.length} other users"
										/>
									{/each}
								{/if}
							</div>
						{/await}
					{/if}
				{/await}
			</ListWithActionAndTitle>
		</div>
	</Casing>
</ProtectedPage>

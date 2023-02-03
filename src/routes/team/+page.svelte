<script lang="ts">
	import { base } from "$app/paths"
	import { getTeamList } from "$lib/Content/team/TeamList"
	import TeamList from "$lib/Content/team/TeamList.svelte"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"
	import ProtectedPage from "$lib/Components/PageContainers/ProtectedPage.svelte"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import PriceCard from "$lib/Components/Widgets/Layouts/PriceCard.svelte"
</script>

<ProtectedPage>
	<Casing>
		<div class="space-y-6">
			{#await getTeamList({})}
				<Loader top={4} />
			{:then teams}
				{#if typeof teams !== "string"}
					<ListWithActionAndTitle title="My Teams">
						<TeamList {teams} />

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
				{/if}
			{/await}

			{#await getTeamList({})}
				<Loader top={4} />
			{:then teams}
				{#if typeof teams !== "string"}
					<ListWithActionAndTitle title="Recommended Teams">
						<div class="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
							{#each teams as team (team.id)}
								<PriceCard
									{...team}
									price={Math.round(Math.random() * 70 + 60)}
									propertyCount={Math.round(Math.random() * 40 + 20)}
								/>
							{/each}
							{#each teams as team (team.id)}
								<PriceCard
									{...team}
									price={Math.round(Math.random() * 70 + 60)}
									propertyCount={Math.round(Math.random() * 40 + 20)}
								/>
							{/each}
							{#each teams as team (team.id)}
								<PriceCard
									{...team}
									price={Math.round(Math.random() * 70 + 60)}
									propertyCount={Math.round(Math.random() * 40 + 20)}
								/>
							{/each}
							{#each teams as team (team.id)}
								<PriceCard
									{...team}
									price={Math.round(Math.random() * 70 + 60)}
									propertyCount={Math.round(Math.random() * 40 + 20)}
								/>
							{/each}
							{#each teams as team (team.id)}
								<PriceCard
									{...team}
									price={Math.round(Math.random() * 70 + 60)}
									propertyCount={Math.round(Math.random() * 40 + 20)}
								/>
							{/each}
						</div>
					</ListWithActionAndTitle>
				{/if}
			{/await}
		</div>
	</Casing>
</ProtectedPage>

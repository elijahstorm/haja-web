<script lang="ts">
	import { base } from "$app/paths"
	import { getUser } from "$lib/Components/Content/User/UserContent"
	import UserContent from "$lib/Components/Content/User/UserContent.svelte"
	import ContentWithFooter from "$lib/Components/PageContainers/ContentWithFooter.svelte"
	import LandingPage from "$lib/Components/PageContainers/LandingPage.svelte"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import session from "$lib/firebase/session"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"
	import Header from "$lib/Components/Branding/Header.svelte"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import { getRecommendedUsers } from "$lib/Components/Content/User/SearchUsers"
	import { getRecommendedTeams } from "$lib/Components/Content/Team/SearchTeams"
	import { getTeamList } from "$lib/Components/Content/Team/TeamList"
	import ItemShowcaseCard from "$lib/Components/Widgets/Layouts/ItemShowcaseCard.svelte"
	import TeamList from "$lib/Components/Content/Team/TeamList.svelte"
	import UserCard from "$lib/Components/Content/User/UserCard.svelte"

	const teamList = getTeamList({})
</script>

<svelte:head>
	<title>Haja: Do Together</title>
</svelte:head>

<ContentWithFooter>
	{#if $session?.user?.uid}
		<Casing>
			{#await getUser({ id: $session?.user?.uid })}
				<Loader />
			{:then user}
				{#if typeof user === "string"}
					{user}
				{:else}
					<UserContent {user}>
						<a
							class="btn btn-primary text-xs px-3 py-2 flex content-center h-max"
							href="{base}/team"
						>
							My Teams
						</a>
					</UserContent>

					<hr class="w-1/2 mx-auto my-12" />

					<ListWithActionAndTitle title="Recommended Friends">
						<div
							class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
						>
							{#await getRecommendedUsers( { exclude: [user.id], amount: 10 } ) then recommendedUsers}
								{#each recommendedUsers as user}
									{#if typeof user !== "string"}
										<UserCard {user} />
									{/if}
								{/each}
							{/await}
						</div>

						<a
							slot="action"
							class="btn btn-primary text-xs px-3 py-2 content-center h-max"
							href="{base}/user/explore"
						>
							<span class="inline sm:hidden"> More </span>
							<span class="hidden sm:inline"> See More </span>
						</a>
					</ListWithActionAndTitle>

					<hr class="w-1/2 mx-auto my-12" />

					<ListWithActionAndTitle title="Recommended Teams">
						{#await teamList then teams}
							{#if typeof teams !== "string"}
								{#await getRecommendedTeams( { exclude: teams.map((team) => team.id), amount: 20 } )}
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
													callToAction="Join {team.users
														.length} other users"
												/>
											{/each}
										{/if}
									</div>
								{/await}
							{/if}
						{/await}

						<a
							slot="action"
							class="btn btn-primary text-xs px-3 py-2 content-center h-max"
							href="{base}/team/explore"
						>
							<span class="inline sm:hidden"> More </span>
							<span class="hidden sm:inline"> See More </span>
						</a>
					</ListWithActionAndTitle>

					<hr class="w-1/2 mx-auto my-12" />

					<ListWithActionAndTitle title="My Teams">
						{#await teamList then teams}
							<TeamList {teams} />
						{/await}

						<a
							slot="action"
							class="btn btn-primary text-xs px-3 py-2 content-center h-max"
							href="{base}/team"
						>
							<span class="inline sm:hidden"> All </span>
							<span class="hidden sm:inline"> See All My Teams </span>
						</a>
					</ListWithActionAndTitle>
				{/if}
			{/await}
		</Casing>
	{:else if $session?.ready}
		<Header />
		<LandingPage />
	{/if}
</ContentWithFooter>

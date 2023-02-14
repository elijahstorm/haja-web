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
	import HorizontalUserCard from "$lib/Components/Content/User/HorizontalUserCard.svelte"
	import { getRecommendedUsers } from "$lib/Components/Content/User/SearchUsers"
</script>

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
						<div class="space-y-3">
							{#await getRecommendedUsers( { exclude: [user.id] } ) then recommendedUsers}
								{#each recommendedUsers as user}
									{#if typeof user !== "string"}
										<HorizontalUserCard {user} />
									{/if}
								{/each}
							{/await}
						</div>
					</ListWithActionAndTitle>
				{/if}
			{/await}
		</Casing>
	{:else if $session?.ready}
		<Header />
		<LandingPage />
	{/if}
</ContentWithFooter>

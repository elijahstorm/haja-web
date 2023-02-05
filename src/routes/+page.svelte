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

	$: myId = $session?.user?.uid
</script>

<ContentWithFooter>
	{#if !myId}
		<Header />
		<LandingPage />
	{:else}
		<Casing>
			{#await getUser({ id: myId })}
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
				{/if}
			{/await}
		</Casing>
	{/if}
</ContentWithFooter>

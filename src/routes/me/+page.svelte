<script lang="ts">
	import { base } from "$app/paths"
	import { getUser } from "$lib/content/user/UserContent"
	import UserContent from "$lib/content/user/UserContent.svelte"
	import ProtectedPage from "$lib/UI/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
	import session from "$lib/firebase/session"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"

	$: myId = $session?.user?.uid
</script>

<ProtectedPage>
	<Casing>
		{#await getUser({ id: myId })}
			<Loader />
		{:then user}
			{#if typeof user === "string"}
				{user}
			{:else}
				<UserContent {user}>
					<div>
						<a href="{base}/team">
							<button class="button color primary"> My Teams </button>
						</a>
					</div>
				</UserContent>
			{/if}
		{/await}
	</Casing>
</ProtectedPage>

<style>
	div {
		margin: 1rem 0;
	}
</style>

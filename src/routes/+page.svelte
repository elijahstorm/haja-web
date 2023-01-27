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
					<a class="button color primary" href="{base}/team"> My Teams </a>
					<a class="button color primary" href="{base}/team"> Create A New Team </a>
				</UserContent>
			{/if}
		{/await}
	</Casing>
</ProtectedPage>

<style>
	.button {
		margin: 0.25rem 0.25rem;
		border: 1px #555 solid;
		font-size: small;
	}
</style>

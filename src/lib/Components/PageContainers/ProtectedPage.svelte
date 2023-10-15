<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { awaitMyId } from "$lib/firebase/auth"
	import session from "$lib/firebase/session"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"

	let wait = awaitMyId()

	const redirectIfNotLoggedIn = async () => {
		await wait

		if (wait == null && browser) {
			goto("/login")
		}
	}

	$: {
		if ($session.ready && !$session.user) {
			if (browser) goto("/login")
		}
	}

	redirectIfNotLoggedIn()
</script>

{#await wait}
	<Loader top={4} />
{:then id}
	{#if id == null}
		Please log in
	{:else}
		<slot />
	{/if}
{/await}

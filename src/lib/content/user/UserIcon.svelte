<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import session from "$lib/firebase/session"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"
	import { getUser, type UserContentConfig } from "./UserContent"

	export let user: UserContentConfig | null = null
	export let size: number = 2

	$: myId = $session?.user?.uid
	$: href = base + (user ? `/user/${user.id}` : "/me")
	$: style = `width: ${size}rem; height: ${size}rem;`

	const myHome = () => {
		if (browser) goto(href)
	}
</script>

<div
	class="h-8 w-8 bg-white rounded-full border border-solid border-gray-600 overflow-hidden self-center cursor-pointer "
	on:click={myHome}
	on:keydown={myHome}
	{style}
>
	{#if user == null}
		{#await getUser({ id: myId }) then user}
			{#if typeof user !== "string"}
				<FallbackImage
					src={user.picture}
					alt="user profile"
					fallback="{base}/icon/person.svg"
					cover
				/>
			{/if}
		{/await}
	{:else}
		<FallbackImage
			src={user?.picture}
			alt="user profile"
			fallback="{base}/icon/person.svg"
			cover
		/>
	{/if}
</div>

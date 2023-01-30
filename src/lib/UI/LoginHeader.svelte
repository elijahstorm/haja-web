<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import UserIcon from "$lib/content/user/UserIcon.svelte"
	import { signOut } from "$lib/firebase/auth"
	import session from "$lib/firebase/session"
	import type { UserInfo } from "firebase/auth"
	import Icon from "@iconify/svelte"
	import { base } from "$app/paths"

	const login = () => {
		if (browser) goto(`${base}/login`)
	}

	let loggedIn: UserInfo
	$: loggedIn = $session.user
</script>

<section class="m-auto flex justify-center gap-4">
	{#if loggedIn}
		<UserIcon />
		<button
			class="btn btn-primary text-xs px-3 py-2 flex content-center h-max"
			on:click={() => signOut()}
		>
			<span class="pr-2 hidden sm:block">Logout</span>
			<Icon icon={"fe:logout"} width={16} />
		</button>
	{:else}
		<button class="btn btn-primary flex content-center h-max" on:click={login}>
			<span class="pr-2 ">Login</span>
			<Icon icon={"akar-icons:google-fill"} width={22} />
		</button>
	{/if}
</section>

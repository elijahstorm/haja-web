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

<section>
	{#if loggedIn}
		<UserIcon />
		<button on:click={() => signOut()} class="button color primary">
			<span class="hide-on-small">Logout</span>
			<Icon icon={"fe:logout"} width={22} />
		</button>
	{:else}
		<button on:click={login} class="button color primary">
			<span>Login</span>
			<Icon icon={"akar-icons:google-fill"} width={22} />
		</button>
	{/if}
</section>

<style>
	section {
		margin: auto;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	button {
		display: flex;
		height: max-content;
	}
	span {
		padding-right: calc(var(--default-padding) / 2);
		padding-top: 2px;
	}
	button > * {
		align-self: center;
	}
	.button {
		border: 1px #555 solid;
		border-radius: var(--small-radius);
	}

	@media only screen and (max-width: 31.25em) {
		.hide-on-small {
			display: none;
		}
	}
</style>

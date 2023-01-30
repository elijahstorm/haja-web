<script lang="ts">
	import { navigating } from "$app/stores"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
	import { Toasts } from "as-toast"
	import { FirebaseApp } from "sveltefire"
	import { firestore } from "$lib/firebase/firestore"
	import { auth } from "$lib/firebase/auth"
	import "../app.css"
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<FirebaseApp {auth} {firestore}>
	<slot />
</FirebaseApp>

{#if $navigating}
	<div class="fixed inset-0 bg-slate-400 bg-opacity-20">
		<div
			class="fixed inset-0 m-auto h-min w-min p-8 bg-white rounded-lg border border-solid border-black"
		>
			<Loader />
		</div>
	</div>
{/if}

<Toasts />

<style>
	:global(body) {
		background: var(--bg);
		color: var(--text);
		letter-spacing: 0.6px;
	}
</style>

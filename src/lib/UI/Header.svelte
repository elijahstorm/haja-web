<script lang="ts">
	import { base } from "$app/paths"

	import BackButton from "$lib/UI/BackButton.svelte"
	import LoginHeader from "$lib/UI/LoginHeader.svelte"

	export let backBtn: boolean = true
	export let logoLink: string = "/"

	const logo = `${base}/haja/logo_horizontal_full.png`
</script>

<div class="flex">
	{#if backBtn}
		<BackButton />
	{/if}
	<a href={base + logoLink}>
		<img class="cursor-pointer w-32" src={logo} alt="HAJA" />
	</a>
	<div class="flex-1" />
	<LoginHeader />
</div>

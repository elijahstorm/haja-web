<script lang="ts">
	import Header from "$lib/UI/Header.svelte"

	export let backBtn: boolean = true
	export let logoLink: string = "/"
</script>

<section class="max-w-4xl flex flex-col justify-center">
	<div class="px-8 py-4 bg-stone-100">
		<Header {backBtn} {logoLink} />
	</div>

	<div class="px-8 pb-16 break break-word">
		<div class="pb-6" />
		<slot />
	</div>
</section>

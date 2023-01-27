<script lang="ts">
	import Header from "$lib/UI/Header.svelte"

	export let backBtn: boolean = true
	export let logoLink: string = "/"
</script>

<section class="flex justify-center">
	<div class="w-full max-w-4xl p-8 pb-16 overflow-hidden break break-words">
		<Header {backBtn} {logoLink} />
		<div class="pb-6" />
		<slot />
	</div>
</section>

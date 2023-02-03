<script lang="ts">
	import Header from "$lib/Components/Branding/Header.svelte"

	export let logoLink: string = "/"
</script>

<div class="px-8 py-4 bg-stone-100 flex justify-center">
	<Header {logoLink} />
</div>

<div class="px-8 pb-16 flex justify-center">
	<div class="max-w-4xl w-full break break-word">
		<div class="pb-6" />
		<slot />
	</div>
</div>

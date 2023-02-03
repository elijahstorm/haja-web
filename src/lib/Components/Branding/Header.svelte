<script lang="ts">
	import { base } from "$app/paths"
	import LoginHeader from "$lib/Components/Auth/LoginHeader.svelte"

	export let backBtn: boolean = true
	export let logoLink: string = "/"
</script>

<div class="max-w-4xl w-full flex">
	<a href={base + logoLink}>
		<img
			class="cursor-pointer w-24"
			src="{base}/images/haja/logo_horizontal_full.png"
			alt="HAJA"
		/>
	</a>
	<div class="flex-1" />
	<LoginHeader />
</div>

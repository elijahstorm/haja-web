<script lang="ts">
	import LoginHeader from "$lib/Components/Auth/LoginHeader.svelte"

	export let logoLink: string = "/"
</script>

<div class="py-4 bg-stone-100 flex justify-center">
	<div class="w-full flex container">
		<a href={logoLink}>
			<img
				class="cursor-pointer w-24"
				src="/images/haja/logo_horizontal_full.png"
				alt="HAJA"
			/>
		</a>
		<div class="flex-1" />
		<LoginHeader />
	</div>
</div>

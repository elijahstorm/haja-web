<script lang="ts">
	import type { TeamContentConfig } from "./TeamContent"
	import UserIconList from "$lib/Components/Content/User/UserIconList.svelte"
	import FallbackImage from "$lib/Components/Widgets/Images/FallbackImage.svelte"

	export let team: TeamContentConfig | string

	const img404 = "/404.png"
	const { title, caption, picture, users } =
		typeof team === "string"
			? {
					title: "",
					caption: "",
					picture: img404,
					users: [],
			  }
			: team
	const src = picture
</script>

<a href="/team/{typeof team === 'string' ? 'create' : team.id}">
	<div
		class="rounded-3xl overflow-hidden border border-solid border-grey-500 grid grid-c grid-rows-2 justify-between content-between"
	>
		{#if typeof team !== "string"}
			<div
				class="aspect-ratio col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden grid grid-rows-1 grid-cols-1"
			>
				<FallbackImage tailwind="row-start-1 col-start-1" {src} alt={`team ${title}`} />
				<div class="overlay w-full h-full col-start-1 row-start-1" />
			</div>
			<p class="p-4 text-white col-start-1 row-start-2 self-end font-bold">{title}</p>
			<p class="p-4 text-white col-start-1 row-start-1 row-end-3">{caption}</p>
			<div
				class="col-start-2 row-start-2 self-end justify-self-end flex justify-end content-center"
			>
				<UserIconList {users} hideMe />
				<p class="p-4 text-white font-bold">
					{users.length}
				</p>
			</div>
		{:else}
			<div class="aspect-ratio col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden">
				<img src={img404} alt="team not found" />
			</div>
			<p class="p-4 col-start-1 row-start-1 row-end-3 font-bold text-red-500">
				Team not found. Create a new one?
			</p>
		{/if}
	</div>
</a>

<style>
	.overlay {
		background-image: linear-gradient(#000c, #0004, transparent, #0004, #000c);
	}

	.aspect-ratio {
		aspect-ratio: 2 / 1;
	}
</style>

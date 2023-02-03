<script lang="ts">
	import type { TeamContentConfig } from "./TeamContent"
	import UserIconList from "$lib/Components/Content/User/UserIconList.svelte"
	import FallbackImage from "$lib/Components/Widgets/Images/FallbackImage.svelte"
	import { base } from "$app/paths"

	export let team: TeamContentConfig | string

	const img404 = "/404.png"
	const { title, caption, picture, users } =
		typeof team === "string"
			? {
					title: "",
					caption: "",
					picture: img404,
					users: []
			  }
			: team
	const src = picture
</script>

<a href="{base}/team/{typeof team === 'string' ? 'create' : team.id}">
	<div
		class="card rounded-3xl overflow-hidden border border-solid border-grey-500 grid grid-c grid-rows-2 justify-between content-between"
	>
		{#if typeof team !== "string"}
			<div class="background col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden">
				<FallbackImage {src} alt={`team ${title}`} />
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
			<div class="background col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden">
				<img src={img404} alt="team not found" />
			</div>
			<p class="p-4 col-start-1 row-start-1 row-end-3 font-bold text-red-500">
				Team not found. Create a new one?
			</p>
		{/if}
	</div>
</a>

<style>
	.card {
		background-image: linear-gradient(#0007, #0002, var(--bg), #0002, #0007);
	}

	.background {
		aspect-ratio: 2 / 1;
	}
</style>

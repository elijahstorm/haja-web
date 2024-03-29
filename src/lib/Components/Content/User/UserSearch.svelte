<script lang="ts">
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import { getRecommendedUsers, getUsersSearch } from "./SearchUsers"
	import type { UserContentConfig } from "./UserContent"
	import UserSearchResult from "./UserSearchResult.svelte"

	let results: Promise<UserContentConfig[] | string>
	let timer: number
	let searchValue: string

	export let exclude: string[] = []
	export let select: (user: UserContentConfig) => () => void

	$: {
		if (searchValue === "") {
			results = null
		}
	}

	const debounce = (resolve: Function) => () => {
		clearTimeout(timer)
		timer = setTimeout(resolve, 1000)
	}

	const search = debounce(async () => {
		if (!searchValue) return

		results = getUsersSearch({
			value: searchValue,
			exclude
		})
	})
</script>

<div
	class="w-full shadow-md overflow-clip rounded-md border border-gray-300 bg-gray-50 focus-within:ring-blue-500 focus-within:border-blue-500"
>
	<div class="relative">
		<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
			<svg
				aria-hidden="true"
				class="w-5 h-5 text-gray-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</div>
		<input
			class="block w-full p-4 pl-10 text-sm text-gray-900 border-transparent focus:ring-transparent focus:border-transparent"
			type="search"
			placeholder="Search for users"
			on:input={search}
			bind:value={searchValue}
		/>
	</div>

	<div class="flex flex-col justify-center relative text-gray-500 border border-gray-100">
		{#if results}
			{#await results}
				<div class="py-2">
					<Loader size={2} />
				</div>
			{:then results}
				{#if Array.isArray(results) && results.length}
					{#each results as user}
						<UserSearchResult {user} action={select(user)} />
					{/each}
				{:else}
					<p class="py-2 px-4 text-sm border-b-2 border-x-2 border-gray-100">
						No similar users found
					</p>
				{/if}
			{/await}
		{:else}
			{#await getRecommendedUsers({ exclude }) then users}
				{#if typeof users !== "string"}
					{#each users as user}
						<UserSearchResult {user} action={select(user)} />
					{/each}
				{/if}
			{/await}
		{/if}
	</div>
</div>

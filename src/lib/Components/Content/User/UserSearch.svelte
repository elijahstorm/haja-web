<script lang="ts">
	import HorizontalUserCard from "./HorizontalUserCard.svelte"
	import { getUser, type UserContentConfig } from "./UserContent"

	let responseIds: string[]
	let results: Promise<UserContentConfig | string>[]
	let timer: number
	let searchValue: string

	export let select: (user: UserContentConfig) => () => void

	$: results = responseIds.map((userId) => getUser({ id: userId }))

	const debounce = (resolve: Function) => () => {
		clearTimeout(timer)
		timer = setTimeout(resolve, 1000)
	}

	const search = debounce(() => {
		// perform search
	})
</script>

<div class="relative w-full">
	<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
		<svg
			aria-hidden="true"
			class="w-5 h-5 text-gray-500 dark:text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</div>
	<input
		class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		type="search"
		placeholder="Search for users"
		on:input={search}
		bind:value={searchValue}
	/>
</div>

{#each results as user}
	{#await user then user}
		{#if typeof user !== "string"}
			<HorizontalUserCard {user}>
				<button
					class="inline-flex items-center px-4 py-2 mr-7 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
					on:click|preventDefault={select(user)}
				>
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>

					<span class="ml-2 hidden sm:block"> Remove </span>
				</button>
			</HorizontalUserCard>
		{/if}
	{/await}
{/each}

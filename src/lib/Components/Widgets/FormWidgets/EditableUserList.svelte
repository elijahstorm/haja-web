<script lang="ts">
	import TeamCard from "$lib/Components/Content/Team/TeamCard.svelte"
	import type { UserContentConfig } from "$lib/Components/Content/User/UserContent"
	import UserIcon from "$lib/Components/Content/User/UserIcon.svelte"
	import UserIdsToContent from "$lib/Components/Content/User/UserIdsToContent.svelte"
	import { myId } from "$lib/firebase/auth"
	import Loader from "../Helpers/Loader.svelte"

	let users: string[]

	export let updatedUsersList: string[] = []
	export let owner: string
	export const getUpdatedUserList = () => users

	$: users = [...updatedUsersList]

	const remove = (user: UserContentConfig) => () => {
		const index = users.findIndex((u) => u === user.id)

		if (~index) {
			users.splice(index, 1)
			users = [...users]
		}
	}
</script>

<div class="bg-white p-4 hidden">
	<button
		class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
			/>
		</svg>

		Archive
	</button>

	<button
		class="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
			/>
		</svg>

		Restore
	</button>
</div>

<div class="flex flex-col items-start">
	<div class="flex gap-3 items-center w-full">
		<UserIdsToContent {users} let:user>
			{#if typeof user !== "string"}
				<div
					class="flex-1 flex gap-3 justify-between items-center rounded-full bg-gray-200 line-height-username1"
				>
					<UserIcon {user} size={4} />

					<span class="flex-1 text-xl whitespace-nowrap overflow-hidden text-ellipsis"
						>{user.title}</span
					>

					{#if user.id !== myId() && user.id !== owner}
						<button class="btn-alert" on:click={remove(user)}>
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
					{:else if user.id === owner}
						<span class="opacity-70 text-xs px-8 italic">(Owner)</span>
					{:else}
						<span class="opacity-70 text-xs px-8 italic">(Me)</span>
					{/if}
				</div>
			{/if}

			<div slot="loading">
				<Loader size={3} />
			</div>

			<div slot="error" let:id>
				<div class="rounded-full w-12 h-12 bg-red-300" />

				<span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-red-300">
					error {id}
				</span>
			</div></UserIdsToContent
		>
	</div>
</div>

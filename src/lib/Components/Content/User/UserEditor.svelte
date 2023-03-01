<script lang="ts">
	import { deleteDocument, updateDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/Components/Widgets/FormWidgets/ImageUploader.svelte"
	import { addToast } from "as-toast"
	import type { UserContentConfig } from "./UserContent"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import { base } from "$app/paths"
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import ToggleButton from "$lib/Components/Widgets/FormWidgets/ToggleButton.svelte"

	export let user: UserContentConfig

	const isTeam = false
	const { id } = user
	const source: string = null

	const getContent = () => ({
		title: user.title,
		caption: user.caption,
		private: user.private
	})

	export const requestSave = () =>
		updateDocument({
			id: user.id,
			isTeam,
			content: getContent()
		}).then((response) => {
			addToast(`User ${user.title} profile updated`)
		})

	const deleteUser = async () => {
		if (!user?.id) return

		await deleteDocument({ id: user.id, isTeam })

		if (browser) goto(`${base}/`)
	}

	const alertAction = (action: Function, warning?: string) => () => {
		const confirmation = confirm(`${warning ?? "Are you sure?"} This action cannot be undone.`)

		if (!confirmation) return

		action()
	}
</script>

<div class="flex flex-col gap-4">
	<slot />

	<ListWithActionAndTitle title="General Information" small>
		<ToggleButton label="Private Profile" bind:checked={user.private} />

		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-2">
				<label
					class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900"
					for="name">Name</label
				>
				<input
					class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
					name="name"
					placeholder="Your user name"
					bind:value={user.title}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label
					class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900"
					for="caption">Description</label
				>
				<textarea
					class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
					name="caption"
					rows={3}
					placeholder="More about you"
					bind:value={user.caption}
				/>
			</div>
		</div>
	</ListWithActionAndTitle>

	<ListWithActionAndTitle title="Images" small>
		<div class="flex gap-4">
			<div class="flex-1">
				<ImageUploader src={user.picture} alt="profile" {id} {source} {isTeam} />
			</div>

			<div class="flex-1">
				<ImageUploader
					src={user.background}
					dest={"background"}
					alt="background"
					{id}
					{source}
					{isTeam}
				/>
			</div>
		</div>
	</ListWithActionAndTitle>

	{#if user.id}
		<ListWithActionAndTitle title="Danger Zone" small>
			<div class="flex flex-col w-max gap-3">
				<button
					class="btn-alert"
					on:click={alertAction(
						deleteUser,
						"This will remove all your data, actions, and membership."
					)}
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

					<span class="ml-2 hidden sm:block"> Delete Account </span>
				</button>
			</div>
		</ListWithActionAndTitle>
	{/if}
</div>

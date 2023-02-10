<script lang="ts">
	import { updateDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/Components/Widgets/FormWidgets/ImageUploader.svelte"
	import { addToast } from "as-toast"
	import type { UserContentConfig } from "./UserContent"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
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
			content: getContent(),
			timestamp: "updatedOn"
		}).then((response) => {
			addToast(`User ${user.title} profile updated`)
		})
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
</div>

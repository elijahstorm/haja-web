<script lang="ts">
	import { updateDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/UI/Widgets/ImageUploader.svelte"
	import { addToast } from "as-toast"
	import type { UserContentConfig } from "./UserContent"

	export let user: UserContentConfig

	const isTeam = false
	const { id } = user
	const source: string = null

	const getContent = () => ({
		title: user.title,
		caption: user.caption
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

	<div class="flex gap-4">
		<ImageUploader src={user.picture} alt="profile" {id} {source} {isTeam} />

		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<label class="px-1 py-0 opacity-70" for="name">Name</label>
				<input
					class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
					name="name"
					placeholder="Your user name"
					bind:value={user.title}
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label class="px-1 py-0 opacity-70" for="caption">Description</label>
				<textarea
					class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
					name="caption"
					rows={3}
					placeholder="More about you"
					bind:value={user.caption}
				/>
			</div>
		</div>
	</div>

	<ImageUploader
		src={user.background}
		dest={"background"}
		alt="background"
		{id}
		{source}
		{isTeam}
	/>
</div>

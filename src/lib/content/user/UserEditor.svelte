<script lang="ts">
	import { updateDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/UI/Widgets/ImageUploader.svelte"
	import type { UserContentConfig } from "./UserContent"

	export let user: UserContentConfig
	export let isTeam: boolean

	const { id } = user
	const source: string = null

	let changedValues = {
		title: user.title,
		caption: user.caption
	}

	const change = (where: string) => (input) => {
		changedValues[where] = input.target.value
	}

	export const requestSave = () => {
		let shouldChange = false
		const toChange = {
			title: user.title,
			caption: user.caption
		}

		if (
			changedValues.title &&
			changedValues.title !== "" &&
			changedValues.title !== user.title
		) {
			shouldChange = true
			toChange.title = changedValues.title
		}

		if (
			changedValues.caption &&
			changedValues.caption !== "" &&
			changedValues.caption !== user.caption
		) {
			shouldChange = true
			toChange.caption = changedValues.caption
		}

		if (!shouldChange) return

		updateDocument({
			type: "user",
			id: user.id,
			isTeam,
			source,
			content: {
				...toChange
			},
			timestamp: "updatedOn"
		})

		user.title = toChange.title
		user.caption = toChange.caption
	}
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
					value={user.title}
					on:input={change("title")}
					placeholder="Your user name"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label class="px-1 py-0 opacity-70" for="caption">Description</label>
				<textarea
					class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
					name="caption"
					value={user.caption}
					on:input={change("caption")}
					rows={3}
					placeholder="More about you"
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

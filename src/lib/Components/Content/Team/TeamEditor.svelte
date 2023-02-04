<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import { updateDocument, uploadDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/Components/Widgets/FormWidgets/ImageUploader.svelte"
	import { addToast } from "as-toast"
	import type { TeamContentConfig } from "./TeamContent"

	export let team: TeamContentConfig

	const isTeam = true

	const getContent = () => ({
		title: team.title,
		caption: team.caption,
		private: team.private,
		users: team.users
	})

	export const requestSave = () =>
		team.id === ""
			? uploadDocument({
					isTeam,
					content: getContent()
			  })
					.then((response) => {
						if (browser) goto(`${base}/team/${response.id}`)
					})
					.catch((response) => {
						alert("error")
					})
			: updateDocument({
					id: team.id,
					isTeam,
					content: getContent(),
					timestamp: "updatedOn"
			  }).then((response) => {
					addToast(`Team ${team.title} updated`)
			  })
</script>

<div class="flex flex-col gap-4">
	<slot />

	<div class="flex flex-col gap-2">
		<label
			class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
			for="name">Name</label
		>
		<input
			class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
			name="name"
			placeholder="Your team name"
			bind:value={team.title}
		/>
	</div>

	<div class="flex flex-col gap-2">
		<label
			class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
			for="caption">Description</label
		>
		<textarea
			class="w-full p-1 text-lg font-bold resize-none background-transparent border border-gray-600 rounded-md"
			name="caption"
			rows={3}
			placeholder="More about this team"
			bind:value={team.caption}
		/>
	</div>

	<label class="relative inline-flex items-center cursor-pointer">
		<input class="sr-only peer" name="private" type="checkbox" bind:checked={team.private} />
		<div
			class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
		/>
		<span
			class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900 dark:text-gray-300"
			>Private Team</span
		>
	</label>

	<ImageUploader src={team.picture} dest={"picture"} alt="picture" id={team.id} {isTeam} />
</div>
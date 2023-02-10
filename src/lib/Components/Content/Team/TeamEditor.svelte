<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import { updateDocument, uploadDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/Components/Widgets/FormWidgets/ImageUploader.svelte"
	import { addToast } from "as-toast"
	import type { TeamContentConfig } from "./TeamContent"
	import EditableUserList from "$lib/Components/Widgets/FormWidgets/EditableUserList.svelte"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import ToggleButton from "$lib/Components/Widgets/FormWidgets/ToggleButton.svelte"

	export let team: TeamContentConfig

	const isTeam = true

	let updatedUsersList = [...team.users]
	let getUpdatedUserList: () => string[]

	const getContent = () => ({
		title: team.title,
		caption: team.caption,
		private: team.private,
		users: getUpdatedUserList ? getUpdatedUserList() : undefined
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

<div class="flex flex-col gap-6">
	<slot />

	<ListWithActionAndTitle title="General Information" small>
		<div class="flex flex-col gap-3">
			<ToggleButton label="Private Team" bind:checked={team.private} />

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
		</div>
	</ListWithActionAndTitle>

	<ListWithActionAndTitle title="User Access" small>
		<EditableUserList {updatedUsersList} bind:getUpdatedUserList />
	</ListWithActionAndTitle>

	<ListWithActionAndTitle title="Background Image" small>
		<ImageUploader
			src={team.picture}
			title="Team {team.title} Background"
			dest={"picture"}
			alt="team background"
			id={team.id}
			{isTeam}
		/>
	</ListWithActionAndTitle>
</div>

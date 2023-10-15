<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { deleteDocument, updateDocument, uploadDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/Components/Widgets/FormWidgets/ImageUploader.svelte"
	import { addToast } from "as-toast"
	import type { TeamContentConfig } from "./TeamContent"
	import EditableUserList from "$lib/Components/Widgets/FormWidgets/EditableUserList.svelte"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import Icon from "@iconify/svelte"
	import { awaitMyId } from "$lib/firebase/auth"
	import ToggleButton from "$lib/Components/Widgets/FormWidgets/ToggleButton.svelte"

	export let team: TeamContentConfig

	const isTeam = true

	let updatedUsersList = [...team.users]
	let getUpdatedUserList: () => string[]

	const getContent = () => ({
		title: team.title,
		caption: team.caption,
		private: team.private,
		users: getUpdatedUserList ? getUpdatedUserList() : undefined,
	})

	export const requestSave = (resolve?: (id: string) => void) =>
		team.id === ""
			? uploadDocument({
					isTeam,
					content: { ...getContent(), owner: team.owner },
			  })
					.then((response) => {
						if (resolve) resolve(response.id)

						if (browser) goto(`/team/${response.id}`)
					})
					.catch((response) => {
						alert("error")
					})
			: updateDocument({
					id: team.id,
					isTeam,
					content: getContent(),
			  }).then((response) => {
					addToast(`Team ${team.title} updated`)
			  })

	const leaveTeam = async () => {
		if (!team?.id || (await awaitMyId()) === team.owner) return

		const users = team.users
		const index = users.indexOf(await awaitMyId())

		if (!~index) return

		users.splice(index, 1)

		await updateDocument({
			id: team.id,
			isTeam,
			content: {
				users,
			},
			timestamp: "updatedOn",
		}).then((response) => {
			addToast(`Successfully left ${team.title}`)
		})

		if (browser) goto("/")
	}

	const deleteTeam = async () => {
		if (!team?.id || (await awaitMyId()) !== team.owner) return

		await deleteDocument({ id: team.id, isTeam })

		if (browser) goto("/")
	}

	const alertAction = (action: Function, warning?: string) => () => {
		const confirmation = confirm(`${warning ?? "Are you sure?"} This action cannot be undone.`)

		if (!confirmation) return

		action()
	}
</script>

<div class="flex flex-col gap-6">
	<slot />

	<ListWithActionAndTitle title="General Information" small>
		<div class="flex flex-col gap-3">
			<ToggleButton label="Private Team" bind:checked={team.private} />

			<div class="flex flex-col gap-2">
				<label
					class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900"
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
					class="px-1 py-0 opacity-70 ml-0.5 text-sm font-medium text-gray-900"
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
		<EditableUserList {updatedUsersList} owner={team.owner} bind:getUpdatedUserList />
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

	{#if team.id}
		<ListWithActionAndTitle title="Danger Zone" small>
			<div class="flex flex-col w-max gap-3">
				{#await awaitMyId() then myId}
					<button
						class="btn-alert"
						disabled={team.owner === myId}
						on:click={alertAction(
							leaveTeam,
							"Doing this action will remove you from the team. If this team is private, you will have to request to join again."
						)}
					>
						<Icon icon={"fe:logout"} width={20} />

						<span class="ml-2 hidden sm:block"> Leave Team </span>
					</button>
				{/await}

				{#await awaitMyId() then myId}
					<button
						class="btn-alert"
						disabled={team.owner !== myId}
						on:click={alertAction(
							deleteTeam,
							"This action can only be performed by the team owner. This will remove all team data, actions, and membership."
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

						<span class="ml-2 hidden sm:block"> Delete Team </span>
					</button>
				{/await}
			</div>
		</ListWithActionAndTitle>
	{/if}
</div>

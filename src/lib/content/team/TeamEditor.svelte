<script lang="ts">
	import { browser } from "$app/environment"
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"
	import { updateDocument, uploadDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/UI/Widgets/ImageUploader.svelte"
	import type { TeamContentConfig } from "./TeamContent"

	export let team: TeamContentConfig
	export let isTeam: boolean

	const { id } = team

	let changedValues = {
		title: team.title,
		caption: team.caption,
		private: team.private,
		users: team.users
	}

	const change = (where: string) => (input) => {
		changedValues[where] = input.target.value
	}

	export const requestSave = () => {
		let shouldChange = false
		const toChange = {
			title: team.title,
			caption: team.caption,
			private: team.private,
			users: [...team.users]
		}

		if (
			changedValues.title &&
			changedValues.title !== "" &&
			(team.id === "" || changedValues.title !== team.title)
		) {
			shouldChange = true
			toChange.title = changedValues.title
		}

		if (
			changedValues.caption &&
			changedValues.caption !== "" &&
			changedValues.caption !== team.caption
		) {
			shouldChange = true
			toChange.caption = changedValues.caption
		}

		if (changedValues.private !== team.private) {
			shouldChange = true
			toChange.private = changedValues.private
		}

		if (changedValues.users !== team.users) {
			shouldChange = true
			toChange.users = [...changedValues.users]
		}

		if (!shouldChange) return

		if (team.id === "") {
			uploadDocument({
				isTeam,
				content: { ...toChange }
			})
				.then((response) => {
					if (browser) goto(`${base}/team/${response.id}`)
				})
				.catch((response) => {
					alert("error")
				})
		} else {
			updateDocument({
				type: "team",
				id: team.id,
				isTeam,
				content: {
					...toChange
				},
				timestamp: "updatedOn"
			})
		}

		team.title = toChange.title
		team.caption = toChange.caption
		team.private = toChange.private
		team.users = toChange.users
	}
</script>

<div class="col">
	<slot />

	<div class="data-input">
		<label for="name">Name</label>
		<input
			name="name"
			value={team.title}
			on:input={change("title")}
			placeholder="Your team name"
		/>
	</div>

	<div class="data-input">
		<label for="caption">Description</label>
		<textarea
			name="caption"
			value={team.caption}
			on:input={change("caption")}
			rows={3}
			placeholder="More about this team"
		/>
	</div>

	<div class="flex justify-end">
		<label for="private">Private Team</label>
		<input
			name="private"
			type="checkbox"
			bind:checked={team.private}
			on:input={change("private")}
		/>
	</div>

	<!-- Add editable user list -->

	<ImageUploader src={team.picture} dest={"picture"} alt="picture" {id} {isTeam} />
</div>

<script lang="ts">
	import { updateDocument, uploadDocument } from "$lib/firebase/firestore"
	import ImageUploader from "$lib/UI/Widgets/ImageUploader.svelte"
	import type { TeamContentConfig } from "./TeamContent"

	export let team: TeamContentConfig
	export let isTeam: boolean

	const { id } = team
	const source: string = null

	let changedValues = {
		title: team.title,
		caption: team.caption
	}

	const change = (where: string) => (input) => {
		changedValues[where] = input.target.value
	}

	export const requestSave = () => {
		let shouldChange = false
		const toChange = {
			title: team.title,
			caption: team.caption
		}

		if (
			changedValues.title &&
			changedValues.title !== "" &&
			changedValues.title !== team.title
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

		if (!shouldChange) return

		if (team.id === "") {
			console.log({ team })
			return
			uploadDocument({
				isTeam,
				content: team
			}).then((response) => {
				team.id = response.id
			})
		} else {
			updateDocument({
				type: "team",
				id: team.id,
				isTeam,
				source,
				content: {
					...toChange
				},
				timestamp: "updatedOn"
			})
		}

		team.title = toChange.title
		team.caption = toChange.caption
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
		<input type="checkbox" name="private" />
	</div>

	<ImageUploader src={team.picture} dest={"picture"} alt="picture" {id} {source} {isTeam} />
</div>

<script lang="ts">
	import EditableContentPage from "$lib/Components/Content/EditableContentPage.svelte"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"
	import type { TeamContentConfig } from "$lib/Components/Content/team/TeamContent"
	import { awaitMyId } from "$lib/firebase/auth"
	import { getUser } from "$lib/Components/Content/User/UserContent"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import Icon from "@iconify/svelte"

	const content: Promise<TeamContentConfig> = new Promise(async (resolve) => {
		const user = await getUser({ id: await awaitMyId() })

		const id = ""
		const title = typeof user !== "string" ? user.title + "'s Team" : ""
		const contentType = "team"
		const caption = ""
		const users = typeof user !== "string" ? [user.id] : []

		resolve({ id, title, contentType, caption, private: true, users })
	})

	let requestSave
</script>

<svelte:head>
	<title>Create Team</title>
</svelte:head>

<Casing>
	<ListWithActionAndTitle title="Make a new team">
		<div slot="action">
			<button class="btn btn-primary py-2 px-3 flex items-center" on:click={requestSave}>
				<span class="hidden sm:block px-2 leading-3">Save</span>
				<Icon icon="material-symbols:save" width={"1.25rem"} />
			</button>
		</div>

		<EditableContentPage isTeam {content} bind:requestSave />
	</ListWithActionAndTitle>
</Casing>

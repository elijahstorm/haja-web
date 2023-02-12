<script lang="ts">
	import EditableContentPage from "$lib/Components/Content/EditableContentPage.svelte"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"
	import type { TeamContentConfig } from "$lib/Components/Content/Team/TeamContent"
	import { awaitMyId } from "$lib/firebase/auth"
	import { getUser } from "$lib/Components/Content/User/UserContent"
	import ListWithActionAndTitle from "$lib/Components/Widgets/Layouts/ListWithActionAndTitle.svelte"
	import Icon from "@iconify/svelte"
	import type { TodoContentConfig } from "$lib/Components/Content/Todo/TodoContent"
	import { uploadDocument } from "$lib/firebase/firestore"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"

	const content: Promise<TeamContentConfig> = new Promise(async (resolve) => {
		const user = await getUser({ id: await awaitMyId() })

		const id = ""
		const title = typeof user !== "string" ? user.title + "'s Team" : ""
		const contentType = "team"
		const caption = ""
		const users = typeof user !== "string" ? [user.id] : []

		resolve({ id, title, contentType, caption, private: false, users })
	})

	let requestSave: (resolve: (id: string) => void) => Promise<void>

	const createAndOnboard = () =>
		requestSave(async (id: string) => {
			const editActionContent: TodoContentConfig = {
				contentType: "todo",
				id: "",
				title: "Customize your profile and add your favorite images!",
				caption: "You can add a caption to your profile and each team you've created",
				status: "todo",
				type: "from_haja",
				date: new Date(new Date().setSeconds(new Date().getSeconds() - 1))
			}
			const uploadOrderList = [editActionContent]

			const type = "todo"
			const source = id
			const isTeam = true

			for (let i = 0; i < uploadOrderList.length; i++) {
				const content = uploadOrderList[i]
				await uploadDocument({
					source,
					isTeam,
					content,
					type
				})
			}
		})
</script>

<svelte:head>
	<title>Create Team</title>
</svelte:head>

<Casing>
	<ListWithActionAndTitle title="Make a new team">
		<div slot="action">
			<button class="btn btn-primary py-2 px-3 flex items-center" on:click={createAndOnboard}>
				<span class="hidden sm:block px-2 leading-3">Save</span>
				<Icon icon="material-symbols:save" width={"1.25rem"} />
			</button>
		</div>

		{#await content}
			<Loader />
		{:then content}
			<EditableContentPage isTeam {content} bind:requestSave />
		{/await}
	</ListWithActionAndTitle>
</Casing>

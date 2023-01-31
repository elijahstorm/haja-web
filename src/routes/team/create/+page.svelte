<script lang="ts">
	import EditableContentPage from "$lib/content/EditableContentPage.svelte"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import type { TeamContentConfig } from "$lib/content/team/TeamContent"
	import { awaitMyId } from "$lib/firebase/auth"
	import { getUser } from "$lib/content/user/UserContent"
	import ListWithActionAndTitle from "$lib/UI/Widgets/ListWithActionAndTitle.svelte"
	import Icon from "@iconify/svelte"

	const content: Promise<TeamContentConfig> = new Promise(async (resolve) => {
		const user = await getUser({ id: await awaitMyId() })

		const id = ""
		const title = typeof user !== "string" ? user.title + "'s New Team" : ""
		const contentType = "team"
		const caption = ""

		resolve({ id, title, contentType, caption, private: true })
	})

	const requestSave = (data) => alert(data)
</script>

<Casing>
	<ListWithActionAndTitle title="Make a new team">
		<div slot="action">
			<button class="btn btn-primary py-2 px-3 flex items-center">
				<span class="hidden sm:block px-2 leading-3">Save</span>
				<Icon icon="entypo:edit" width={"1.25rem"} />
			</button>
		</div>

		<EditableContentPage isTeam {content} {requestSave} />
	</ListWithActionAndTitle>
</Casing>

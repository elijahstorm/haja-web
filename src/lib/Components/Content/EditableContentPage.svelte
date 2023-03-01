<script lang="ts">
	import ProtectedPage from "$lib/Components/PageContainers/ProtectedPage.svelte"
	import type { AllContentTypes } from "./Content"
	import TeamEditor from "./Team/TeamEditor.svelte"
	import TodoEditor from "./Todo/TodoEditor.svelte"
	import UserEditor from "./User/UserEditor.svelte"

	export let content: AllContentTypes
	export let errors: string | null = null
	export let source: string = null
	export let isTeam: boolean
	export let requestSave: (resolve?: (id: string) => void) => Promise<void>
</script>

<ProtectedPage>
	{#if content}
		<div class="mb-20">
			{#if content.contentType == "team"}
				<TeamEditor team={content} bind:requestSave>
					<slot />
				</TeamEditor>
			{:else if content.contentType == "user"}
				<UserEditor user={content} bind:requestSave>
					<slot />
				</UserEditor>
			{:else if content.contentType == "todo"}
				<TodoEditor todo={content} {source} {isTeam} bind:requestSave>
					<slot />
				</TodoEditor>
			{/if}
		</div>
	{:else}
		<p class="mt-8 w-full">{errors ?? "Sorry, we can't find what you're looking for 🔎"}</p>
		<p class="mt-8 w-full">You may need to login to view this content</p>
	{/if}
</ProtectedPage>

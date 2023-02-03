<script lang="ts">
	import ProtectedPage from "$lib/Components/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import type { AllContentTypes } from "./Content"
	import TeamEditor from "./Team/TeamEditor.svelte"
	import TodoEditor from "./Todo/TodoEditor.svelte"
	import UserEditor from "./User/UserEditor.svelte"

	export let content: Promise<AllContentTypes | null>
	export let errors: string | null = null
	export let source: string = null
	export let isTeam: boolean
	export let requestSave
</script>

<svelte:head>
	{#await content then content}
		{#if content}
			<title>Edit | {content.title} | Haja: Do Together</title>
		{/if}
	{/await}
</svelte:head>

<ProtectedPage>
	{#if content}
		{#await content}
			<Loader />
		{:then content}
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
		{/await}
	{:else}
		<p class="mt-8 w-full">{errors ?? "Sorry, we can't find what you're looking for 🔎"}</p>
		<p class="mt-8 w-full">You may need to login to view this content</p>
	{/if}
</ProtectedPage>

<script lang="ts">
	import ProtectedPage from "$lib/UI/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
	import type { AllContentTypes } from "./Content"
	import TeamEditor from "./team/TeamEditor.svelte"
	import TodoEditor from "./todo/TodoEditor.svelte"
	import UserEditor from "./user/UserEditor.svelte"

	export let content: Promise<AllContentTypes | null>
	export let errors: string | null = null
	export let source: string = null
	export let isTeam: boolean
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
			<div class="edit">
				{#if content.contentType == "team"}
					<TeamEditor team={content} {isTeam}>
						<slot />
					</TeamEditor>
				{:else if content.contentType == "user"}
					<UserEditor user={content} {isTeam}>
						<slot />
					</UserEditor>
				{:else if content.contentType == "todo"}
					<TodoEditor todo={content} {source} {isTeam}>
						<slot />
					</TodoEditor>
				{/if}
			</div>
		{/await}
	{:else}
		<p>{errors ?? "Sorry, we can't find what you're looking for 🔎"}</p>
		<p>You may need to login to view this content</p>
	{/if}
</ProtectedPage>

<style>
	.edit {
		margin-bottom: 5rem;
	}
	p {
		margin-top: 2rem;
		width: 100%;
	}
</style>

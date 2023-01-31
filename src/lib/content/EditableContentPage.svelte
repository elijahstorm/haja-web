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
			<div class="edit mb-20">
				{#if content.contentType == "team"}
					<TeamEditor team={content} {isTeam} bind:requestSave>
						<slot />
					</TeamEditor>
				{:else if content.contentType == "user"}
					<UserEditor user={content} {isTeam} bind:requestSave>
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

<style>
	:global(.edit .row) {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	:global(.edit .col) {
		display: flex;
		flex-direction: column;
		flex: 1 1 50%;
		gap: 1rem;
	}

	:global(.edit .data-input) {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	:global(.edit label) {
		padding: 0 0.25rem;
		opacity: 0.7;
	}

	:global(.edit textarea),
	:global(.edit input) {
		width: 100%;
		border: none;
		padding: 0.25rem;
		font-size: 20px;
		font-weight: bold;
		resize: none;
		background: transparent;
		border: 1px solid var(--text);
		border-radius: 0.25rem;
	}
</style>

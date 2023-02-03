<script lang="ts">
	import type { AllContentTypes } from "./Content"
	import TeamContent from "./Team/TeamContent.svelte"
	import TodoContent from "./Todo/TodoContent.svelte"
	import UserContent from "./User/UserContent.svelte"

	export let content: AllContentTypes
	export let source: string
	export let isTeam: boolean
</script>

{#if content.contentType == "team"}
	<TeamContent team={content} />
{:else if content.contentType == "user"}
	<UserContent user={content} />
{:else if content.contentType == "todo"}
	<TodoContent todo={content} {source} {isTeam} />
{/if}

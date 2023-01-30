<script lang="ts">
	import type { AllContentTypes } from "./Content"
	import TeamContent from "./team/TeamContent.svelte"
	import TodoContent from "./todo/TodoContent.svelte"
	import UserContent from "./user/UserContent.svelte"

	export let content: AllContentTypes
	export let source: string
	export let isTeam: boolean
</script>

<section class="my-4 mx-0 transition-all">
	{#if content.contentType == "team"}
		<TeamContent team={content} />
	{:else if content.contentType == "user"}
		<UserContent user={content} />
	{:else if content.contentType == "todo"}
		<TodoContent todo={content} {source} {isTeam} />
	{/if}
</section>

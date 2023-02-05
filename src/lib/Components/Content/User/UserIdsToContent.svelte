<script lang="ts">
	import { getUser } from "./UserContent"

	export let users: string[] = []
</script>

{#each users as id (id)}
	{#await getUser({ id })}
		<slot name="loader" />
	{:then user}
		{#if typeof user !== "string"}
			<slot {user} />
		{:else}
			<slot name="error" {id} />
		{/if}
	{/await}
{/each}

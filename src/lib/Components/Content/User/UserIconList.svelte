<script lang="ts">
	import { awaitMyId } from "$lib/firebase/auth"
	import { getUser } from "./UserContent"
	import UserIcon from "./UserIcon.svelte"

	const SHOW_MAX_LENGTH = 4

	export let users: string[] = []
	export let hideMe = false
	export let size = 2

	if (users.length <= SHOW_MAX_LENGTH) {
		hideMe = false
	}
</script>

<section class="grid grid-cols-4 grid-rows-1 items-center">
	{#await awaitMyId() then myself}
		{#each users
			.filter((id) => !hideMe || id != myself)
			.slice(0, SHOW_MAX_LENGTH) as id, index (id)}
			<div
				class="row-start-1 h-min"
				style="translate: {(index / 4) * 100}% 0; grid-column: {4 - index};"
			>
				{#await getUser({ id })}
					<UserIcon user="fallback" {size} />
				{:then user}
					{#if typeof user !== "string"}
						<UserIcon {user} {size} />
					{/if}
				{/await}
			</div>
		{/each}
	{/await}
</section>

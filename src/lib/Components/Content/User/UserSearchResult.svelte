<script lang="ts">
	import type { UserContentConfig } from "./UserContent"
	import UserIcon from "./UserIcon.svelte"

	export let user: UserContentConfig
	export let action: (event: MouseEvent) => any
</script>

<button
	class="flex items-center pl-3 pr-2 py-1 text-sm border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
	on:click={action}
>
	<UserIcon {user} size={3} />
	<span class="ml-4">
		{user.title}
	</span>
</button>

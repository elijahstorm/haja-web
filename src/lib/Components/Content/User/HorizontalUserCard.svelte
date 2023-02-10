<script lang="ts">
	import type { UserContentConfig } from "./UserContent"
	import UserIcon from "./UserIcon.svelte"
	import Icon from "@iconify/svelte"

	export let user: UserContentConfig

	const addFriend = (user: UserContentConfig) => () => {
		// todo
	}
</script>

<div
	class="flex-1 flex gap-3 justify-between items-center rounded-full bg-gray-200 line-height-username1"
>
	<UserIcon {user} size={4} />

	<span class="flex-1 text-xl whitespace-nowrap overflow-hidden text-ellipsis">{user.title}</span>

	<slot>
		<button
			class="inline-flex items-center px-4 py-2 mr-7 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-md"
			on:click={addFriend(user)}
		>
			<Icon icon="fluent-mdl2:add-friend" />

			<span class="ml-2 hidden sm:block"> Add Friend </span>
		</button></slot
	>
</div>

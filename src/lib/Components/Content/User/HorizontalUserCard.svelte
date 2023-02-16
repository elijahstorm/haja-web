<script lang="ts">
	import type { UserContentConfig } from "./UserContent"
	import UserIcon from "./UserIcon.svelte"
	import { base } from "$app/paths"
	import AddFriendButton from "$lib/Components/Widgets/Buttons/AddFriendButton.svelte"

	export let user: UserContentConfig
</script>

<div
	class="flex-1 flex gap-3 justify-between items-center rounded-full bg-gray-200 line-height-username1 pr-7"
>
	<UserIcon {user} size={4} newTab />

	<a
		class="contents"
		href={base + (user ? `/user/${user.id}` : "/")}
		target="_blank"
		rel="noreferrer"
	>
		<span class="flex-1 text-xl whitespace-nowrap overflow-hidden text-ellipsis"
			>{user.title}</span
		>
	</a>

	<slot>
		<AddFriendButton {user} />
	</slot>
</div>

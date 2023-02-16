<script lang="ts">
	import AddFriendButton from "$lib/Components/Widgets/Buttons/AddFriendButton.svelte"
	import FallbackImage from "$lib/Components/Widgets/Images/FallbackImage.svelte"
	import UserIcon from "$lib/Components/Content/User/UserIcon.svelte"
	import type { UserContentConfig } from "./UserContent"

	export let user: UserContentConfig
</script>

<div
	class="w-full bg-white shadow-md rounded-lg p-12 flex flex-col gap-4 justify-center items-center"
>
	<div class="mb-4">
		<UserIcon {user} size={8} />
	</div>

	<div class="text-center">
		<p class="text-xl text-gray-700 font-bold">{user.title}</p>
		<p class="text-base text-gray-400 font-normal">{user.caption}</p>
	</div>

	<slot>
		<AddFriendButton {user} />
	</slot>
</div>

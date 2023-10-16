<script lang="ts">
	import type { UserContentConfig } from "./UserContent"
	import FullContentPage from "$lib/Components/Content/FullContentPage.svelte"
	import UserIcon from "./UserIcon.svelte"

	export let user: UserContentConfig

	const { background } = user
</script>

<FullContentPage entity={user} {background}>
	<div slot="picture">
		<UserIcon {user} size={10} />
	</div>
	<div slot="info">
		<slot />
	</div>
</FullContentPage>

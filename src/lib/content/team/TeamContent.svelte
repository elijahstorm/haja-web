<script lang="ts">
	import type { TeamContentConfig } from "./TeamContent"
	import FullContentPage from "../FullContentPage.svelte"
	import UserIconList from "../user/UserIconList.svelte"

	export let team: TeamContentConfig

	$: users = team.users
</script>

<FullContentPage entity={team} isTeam={true}>
	<div class="flex justify-end content-center gap-4" slot="info">
		<UserIconList {users} hideMe size={1.5} />
		<p class="self-center text-base">
			{users.length} user{users.length != 1 ? "s" : ""}
		</p>
	</div>
	<slot />
</FullContentPage>

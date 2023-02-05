<script lang="ts">
	import UserIcon from "$lib/Components/Content/User/UserIcon.svelte"
	import UserIdsToContent from "$lib/Components/Content/User/UserIdsToContent.svelte"

	export let users: string[] = []
</script>

<UserIdsToContent let:user>
	<div class="flex flex-col">
		{#each users as user, index (user.id)}
			<div>
				<p>{index}</p>
				<UserIcon {user} />
				<p>{user.name}</p>
			</div>
		{/each}
	</div>

	<div slot="loading">loading</div>
	<div slot="error" let:id>error {id}</div>
</UserIdsToContent>

<script lang="ts">
	import { base } from "$app/paths"
	import { getTeamList } from "$lib/content/team/TeamList"
	import TeamList from "$lib/content/team/TeamList.svelte"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import ProtectedPage from "$lib/UI/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
</script>

<ProtectedPage>
	<Casing>
		<a class="btn btn-primary text-xs px-3 py-2 flex content-center h-max" href="{base}/team">
			Create A New Team (todo)
		</a>
		{#await getTeamList({})}
			<Loader top={4} />
		{:then teams}
			<TeamList {teams} />
		{/await}
	</Casing>
</ProtectedPage>

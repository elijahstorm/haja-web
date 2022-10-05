<script lang="ts">
	import { getTeamList } from "$lib/content/team/TeamList"
	import TeamList from "$lib/content/team/TeamList.svelte"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import ProtectedPage from "$lib/UI/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
</script>

<ProtectedPage>
	<Casing>
		{#await getTeamList({})}
			<Loader top={4} />
		{:then teams}
			<TeamList {teams} />
		{/await}
	</Casing>
</ProtectedPage>

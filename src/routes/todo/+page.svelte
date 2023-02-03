<script lang="ts">
	import { getTodoList } from "$lib/Content/Todo/TodoList"
	import TodoList from "$lib/Content/Todo/TodoList.svelte"
	import ProtectedPage from "$lib/Components/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import session from "$lib/firebase/session"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"

	$: myId = $session?.user?.uid
</script>

<ProtectedPage>
	<Casing>
		{#await getTodoList({ source: myId })}
			<Loader top={4} />
		{:then todos}
			<TodoList {todos} source={myId} isTeam={false} />
		{/await}
	</Casing>
</ProtectedPage>

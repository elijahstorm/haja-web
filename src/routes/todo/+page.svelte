<script lang="ts">
	import { getTodoList } from "$lib/content/todo/TodoList"
	import TodoList from "$lib/content/todo/TodoList.svelte"
	import ProtectedPage from "$lib/UI/PageContainers/ProtectedPage.svelte"
	import Loader from "$lib/UI/Widgets/Loader.svelte"
	import session from "$lib/firebase/session"
	import Casing from "$lib/UI/PageContainers/Casing.svelte"
	import { Collection } from "sveltefire"

	$: myId = $session?.user?.uid
</script>

<ProtectedPage>
	<Casing>
		<!-- {#await getTodoList({ source: myId })}
			<Loader top={4} />
		{:then todos}
			<TodoList {todos} source={myId} isTeam={false} />
		{/await} -->
		<Collection ref={`todos/${myId}`} let:data={todos}>
			{#each todos as todo (todo.id)}
				<aside>
					{todo.title}
				</aside>
				{todo.date}
			{/each}
		</Collection>
	</Casing>
</ProtectedPage>

<script lang="ts">
	import AddTodo from "./AddTodo.svelte"
	import type { TodoContentConfig } from "./TodoContent"
	import TodoContent from "./TodoContent.svelte"

	export let todos: TodoContentConfig[] | string = []
	export let source: string
	export let isTeam: boolean
	export let locked: boolean = false

	let push = false

	const callback = (todo: TodoContentConfig) => {
		if (typeof todos === "string") return

		todos = [todo, ...todos]
		push = true

		setTimeout(() => {
			push = false
		}, 1100)
	}
</script>

{#if !locked}
	<div class="add" class:push>
		<AddTodo {source} {isTeam} {callback} />
	</div>
{/if}

{#if typeof todos === "string" || !Array.isArray(todos)}
	{todos}
{:else if todos.length == 0}
	<p class="mt-8">No todos yet!</p>
{:else if todos}
	<div class:push>
		{#each todos as todo (todo.id)}
			<div class="my-4 mx-0">
				<TodoContent {todo} {source} {isTeam} />
			</div>
		{/each}
	</div>
{/if}

<style>
	:not(.add).push {
		transform: translateY(-3rem);
		animation-name: push;
		animation-delay: 100ms;
		animation-duration: 1000ms;
		animation-timing-function: ease;
	}
	.add.push {
		opacity: 0;
		animation-name: fade;
		animation-delay: 600ms;
		animation-duration: 500ms;
		animation-timing-function: ease;
	}

	@keyframes push {
		from {
			transform: translateY(-3rem);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

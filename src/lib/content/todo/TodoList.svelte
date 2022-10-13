<script lang="ts">
	import { base } from "$app/paths"
	import AddTodo from "./AddTodo.svelte"
	import type { TodoContentConfig } from "./TodoContent"
	import TodoContent from "./TodoContent.svelte"

	export let todos: TodoContentConfig[] | string = []
	export let source: string
	export let isTeam: boolean
	export let locked: boolean = false

	let push = false
	let page = 1
	let list = todos

	const api = `${base}/api/todos&source=${source}&isTeam=${isTeam}`

	function infiniteHandler({ detail: { loaded, complete } }) {
		fetch(`${api}&page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.hits.length) {
					page += 1
					list = [...list, ...data.hits]
					loaded()
				} else {
					complete()
				}
			})
	}

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
	<p>No todos yet!</p>
{:else}
	<div class:push>
		{#each todos as todo (todo.id)}
			<div class="todo">
				<TodoContent {todo} {source} {isTeam} />
			</div>
		{/each}
	</div>
{/if}

<style>
	.todo {
		margin: 1rem 0;
	}
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
	p {
		margin-top: 2rem;
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

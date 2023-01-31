<script lang="ts">
	import type { TodoContentConfig } from "./TodoContent"
	import { updateDocument } from "$lib/firebase/firestore"
	import InlineTodoEditor from "./InlineTodoEditor.svelte"
	import { fade, fly } from "svelte/transition"
	import Icon from "@iconify/svelte"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"

	export let todo: TodoContentConfig
	export let source: string
	export let isTeam: boolean

	const width = 30

	let shown = false
	let editing = false
	let input

	$: timeStr = new Date(todo.date).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	})
	$: dateStr = new Date(todo.date).toLocaleDateString([], {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric"
	})
	$: icon = todo.status == "done" ? "akar-icons:circle-check-fill" : "akar-icons:circle"
	$: color = todo.color == "" ? "var(--primary)" : todo.color

	const toggleDone = () => {
		const status = todo.status == "done" ? "todo" : "done"
		todo.status = status

		updateDocument({
			id: todo.id,
			source,
			isTeam,
			type: "todo",
			content: {
				status
			}
		})
	}

	const toggleShowInlineEditor = () => {
		shown = !shown
	}

	const save = () => {
		if (!editing) return

		editing = false

		if (input.value == "") return

		updateDocument({
			type: "todo",
			id: todo.id,
			isTeam,
			source,
			content: {
				title: input.value
			},
			timestamp: "updatedOn"
		})
	}

	const saveOnEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			save()
		}
	}
</script>

{#if todo.status == "[broken]"}
	<FallbackImage alt="todo not found" />
{:else if todo.status != "[deleted]"}
	<div class="flex gap-4 items-start" out:fade>
		<div
			class="relative cursor-pointer"
			on:click|preventDefault={toggleDone}
			on:keydown|preventDefault={toggleDone}
		>
			<Icon {color} {width} {icon} />
		</div>
		<div class="flex flex-col gap-3">
			{#if editing}
				<!-- svelte-ignore a11y-autofocus -->
				<input
					class="font-bold w-full border-none text-lg background-transparent"
					bind:this={input}
					bind:value={todo.title}
					placeholder="Let's do Together!"
					on:blur={save}
					on:keydown={saveOnEnter}
					autofocus
				/>
			{:else}
				<div
					class="cursor-pointer text-lg my-auto mx-0 flex flex-col"
					on:click={toggleShowInlineEditor}
					on:keydown={toggleShowInlineEditor}
				>
					<p class="font-bold">{todo.title}</p>
					{#if todo.caption != ""}
						<p class="opacity-60">{todo.caption}</p>
					{/if}
					{#if shown}
						<p
							class="opacity-60"
							in:fly={{ y: -50, duration: 300 }}
							out:fly={{ y: -50, duration: 300 }}
						>
							{timeStr} : {dateStr}
						</p>
					{/if}
				</div>

				<InlineTodoEditor bind:todo bind:editing {shown} {source} {isTeam} />
			{/if}
		</div>
	</div>
{/if}

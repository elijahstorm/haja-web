<script lang="ts">
	import type { TodoColor, TodoContentConfig } from "./TodoContent"
	import { uploadDocument } from "$lib/firebase/firestore"
	import Icon from "@iconify/svelte"
	import session from "$lib/firebase/session"

	$: myId = $session?.user?.uid

	export let source: string = myId
	export let isTeam: boolean = false
	export let callback: (todo: TodoContentConfig) => void = (_) => {}

	const width = 30
	let input: HTMLInputElement
	let editing = false
	let title: string = ""
	let color: TodoColor = ""
	$: style = color == "" ? "var(--primary);" : color
	$: icon = editing ? "akar-icons:circle" : "gridicons:add"

	const type = "todo"
	const add = () => {
		editing = true
		setTimeout(() => input && input.focus(), 5)
	}

	const save = () => {
		if (!editing) return

		editing = false

		if (title == "") return

		const content: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: `${title}`,
			caption: "",
			status: "todo",
			type: "",
			date: new Date(),
			color,
		}

		title = ""

		callback(content)

		uploadDocument({
			source,
			isTeam,
			content,
			type,
		}).then((response) => {
			content.id = response.id
		})
	}

	const saveOnEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			save()
		}
	}
</script>

<div
	class="flex gap-4"
	class:cursor-pointer={!editing}
	on:click={add}
	on:keydown={add}
	data-test-type="add"
	role="button"
	tabindex="0"
>
	<div>
		<Icon {icon} color={style} {width} />
	</div>

	{#if editing}
		<input
			class="font-bold w-full border-none text-lg background-transparent"
			bind:this={input}
			bind:value={title}
			placeholder="Let's do Together!"
			on:blur={save}
			on:keydown={saveOnEnter}
		/>
	{:else}
		<div class="text-lg my-auto mx-0">
			<span class="font-bold">Add a new todo</span>
		</div>
	{/if}
</div>

<style>
	.flex > :first-child {
		flex: 0 0 30px;
	}
</style>

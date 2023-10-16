<script lang="ts">
	import { deleteDocument, updateDocument } from "$lib/firebase/firestore"
	import CopyToClipboard from "$lib/Components/Widgets/Helpers/CopyToClipboard.svelte"
	import { Datepicker, Popover } from "svelte-calendar"
	import type { TodoContentConfig } from "./TodoContent"
	import Icon from "@iconify/svelte"
	import { onMount } from "svelte"
	import { addToast } from "as-toast"
	import { fly } from "svelte/transition"

	export let todo: TodoContentConfig
	export let isTeam: boolean
	export let source: string
	export let shown: boolean
	export let editing: boolean

	let clipboard
	let updateDate
	let smallContent

	const colors = [
		"ffda1e",
		"f2a005",
		"f24503",
		"fe9ad2",
		"9d9bfe",
		"1f99fd",
		"7ac6ff",
		"60dfcd",
		"62ca9c",
	] as const

	$: id = todo.id

	const edit = () => {
		editing = true
	}

	const cal = () => {
		const app = new Popover({
			target: clipboard,
			props: {},
		})
		app.$destroy()
	}

	const del = () => {
		todo.status = "[deleted]"
		deleteDocument({
			type: "todo",
			id,
			isTeam,
			source,
		})
	}

	const share = () => {
		const value = `/todo/${source}-${isTeam ? 1 : 0}/${id}`
		const app = new CopyToClipboard({
			target: clipboard,
			props: { value },
		})
		app.$destroy()
		addToast("Link copied!")
	}

	const changeColor = (color: (typeof colors)[number]) => {
		todo.color = `#${color}`
		updateDocument({
			type: "todo",
			id,
			isTeam,
			source,
			content: {
				color: `ff${color}`,
			},
		})
	}

	const icons = [
		{
			icon: "entypo:edit",
			action: edit,
		},
		{
			icon: "ant-design:calendar-filled", // akar-icons:calendar
			action: cal,
		},
		{
			icon: "dashicons:trash", // bxs:trash-alt
			action: del,
		},
		{
			icon: "bi:share-fill",
			action: share,
		},
	]

	const resize = () => {
		smallContent =
			window.matchMedia && window.matchMedia("only screen and (max-width: 30em)").matches
	}

	onMount(resize)
</script>

<svelte:window on:resize={resize} />

{#if shown}
	<div class="flex gap-3" in:fly={{ y: -50, duration: 300 }} out:fly={{ y: -50, duration: 300 }}>
		{#each icons as icon}
			<div
				class="cursor-pointer"
				on:click={icon.action}
				on:keydown={icon.action}
				role="button"
				tabindex="0"
			>
				{#if icon.action === cal}
					<div class="remove-defaults">
						<Datepicker bind:store={updateDate}>
							<Icon icon={icon.icon} width={"1.25rem"} />
						</Datepicker>
					</div>
				{:else}
					<Icon icon={icon.icon} width={"1.25rem"} />
				{/if}
			</div>
		{/each}
		<div bind:this={clipboard} />
	</div>
	{#if smallContent}
		<div class="flex gap-3">
			{#each colors.slice(0, 5) as color (color)}
				<div
					class="overflow-hidden rounded-full cursor-pointer flex w-5 h-5 items-center justify-center"
					style={`background: #${color};`}
					on:click={() => changeColor(color)}
					on:keydown={() => changeColor(color)}
					role="button"
					tabindex="0"
				>
					{#if `#${color}` === todo.color}
						<Icon icon="akar-icons:check" color="var(--bg)" />
					{/if}
				</div>
			{/each}
		</div>
		<div class="flex gap-3">
			{#each colors.slice(5) as color (color)}
				<div
					class="overflow-hidden rounded-full cursor-pointer flex w-5 h-5 items-center justify-center"
					style={`background: #${color};`}
					on:click={() => changeColor(color)}
					on:keydown={() => changeColor(color)}
					role="button"
					tabindex="0"
				/>
			{/each}
		</div>
	{:else}
		<div
			class="flex gap-3"
			in:fly={{ y: -50, duration: 300 }}
			out:fly={{ y: -50, duration: 300 }}
		>
			{#each colors as color (color)}
				<div
					class="overflow-hidden rounded-full cursor-pointer flex w-5 h-5 items-center justify-center"
					style={`background: #${color};`}
					on:click={() => changeColor(color)}
					on:keydown={() => changeColor(color)}
					role="button"
					tabindex="0"
				>
					{#if `#${color}` === todo.color}
						<Icon icon="akar-icons:check" color="var(--bg)" />
					{/if}
				</div>
			{/each}
		</div>
	{/if}
{/if}

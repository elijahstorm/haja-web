<script lang="ts">
	import type { UserContentConfig } from "$lib/Components/Content/User/UserContent"
	import TodoList from "$lib/Components/Content/Todo/TodoList.svelte"
	import { getTodoList } from "$lib/Components/Content/Todo/TodoList"
	import session from "$lib/firebase/session"
	import type { TeamContentConfig } from "$lib/Components/Content/Team/TeamContent"
	import FallbackImage from "$lib/Components/Widgets/Images/FallbackImage.svelte"
	import InfoCard from "$lib/Components/Widgets/Layouts/InfoCard.svelte"
	import DateInput from "$lib/Components/Widgets/FormWidgets/DateInput.svelte"
	import EditButton from "$lib/Components/Widgets/Buttons/EditButton.svelte"
	import { awaitMyId } from "$lib/firebase/auth"
	import AddTodo from "./Todo/AddTodo.svelte"

	export let entity: UserContentConfig | TeamContentConfig
	export let isTeam: boolean = false
	export let amount: number = 100
	export let background: string = null

	const DAY = 86400000
	const WEEK = DAY * 7

	const { id, title, caption, picture } = entity
	const source = id

	let date
	$: myId = $session?.user?.uid
	$: src = background ?? picture
	$: dateRange = {
		start: new Date(($date?.selected ?? new Date()) - WEEK - DAY),
		end: new Date(($date?.selected ?? new Date()) + DAY * 2),
	}
</script>

<section class="grid grid-cols-2 justify-between content-between select-none">
	<div
		class="background grid grid-cols-1 grid-rows-2 col-start-1 col-end-3 row-start-2 row-end-4 rounded 2xl:overflow-hidden"
	>
		<div class="relative col-start-1 row-start-1 row-end-3">
			<div class="absolute left-[50%] translate-x-[-50%] h-full w-screen 2xl:w-full">
				<FallbackImage {src} alt={`${isTeam ? "team" : "user"} ${title}`} cover />
			</div>
			<div class="darken absolute left-[50%] translate-x-[-50%] h-full w-screen 2xl:w-full">
				&nbsp;
			</div>
			<div class="overlay absolute left-[50%] translate-x-[-50%] h-full w-screen 2xl:w-full">
				&nbsp;
			</div>
		</div>

		{#if (!isTeam && source === myId) || (isTeam && entity?.users?.includes(myId))}
			<div
				class="mt-8 col-start-1 row-start-1 row-end-3 self-start justify-self-end m-4 relative"
			>
				<EditButton {entity} {isTeam} />
			</div>
		{/if}
	</div>

	<div class="col-start-1 col-end-3 row-start-3 row-end-4 relative">
		<InfoCard>
			<p slot="title">
				{title ?? "unknown"}'s todos!
				<br />
				<span class="text-black text-sm font-normal opacity-90 text-center">{caption}</span>
			</p>

			<slot />

			<DateInput bind:date />

			{#await getTodoList({ source, isTeam, amount, dateRange }) then todos}
				{#await awaitMyId() then myId}
					<TodoList
						{todos}
						{source}
						{isTeam}
						locked={(!isTeam && source !== myId) ||
							(isTeam && !entity?.users?.includes(myId))}
					/>
				{/await}
			{/await}
		</InfoCard>
	</div>

	<div
		class="ml-2 -mt-2 col-start-1 row-start-2 self-center justify-start aspect-square h-8 relative"
	>
		<slot name="picture" />
	</div>
</section>

<style>
	section {
		grid-template-rows: auto 6rem 1fr;
	}

	.background {
		aspect-ratio: 2 / 1;
	}

	.darken {
		background-image: linear-gradient(
			rgb(0 0 0 / 0.4),
			rgb(0 0 0 / 0.2),
			transparent,
			transparent,
			transparent
		);
	}

	.overlay {
		background-image: linear-gradient(transparent, transparent, #fff2, #fffb, var(--bg));
	}
</style>

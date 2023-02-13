<script lang="ts">
	import type { UserContentConfig } from "$lib/Components/Content/User/UserContent"
	import TodoList from "$lib/Components/Content/Todo/TodoList.svelte"
	import { getTodoList } from "$lib/Components/Content/Todo/TodoList"
	import session from "$lib/firebase/session"
	import type { TeamContentConfig } from "$lib/Components/Content/Team/TeamContent"
	import type { AllContentTypes } from "./Content"
	import FallbackImage from "$lib/Components/Widgets/Images/FallbackImage.svelte"
	import InfoCard from "$lib/Components/Widgets/Layouts/InfoCard.svelte"
	import DateInput from "$lib/Components/Widgets/FormWidgets/DateInput.svelte"
	import EditButton from "$lib/Components/Widgets/Buttons/EditButton.svelte"
	import { awaitMyId } from "$lib/firebase/auth"

	export let entity: UserContentConfig | TeamContentConfig
	export let isTeam: boolean = false
	export let amount: number = 100
	export let background: string = null

	const WEEK = 604800000
	const DAY = WEEK / 7

	const { id, title, caption, picture } = entity
	const source = id

	let promise = new Promise<AllContentTypes>((resolve) => resolve(entity))

	let date
	$: myId = $session?.user?.uid
	$: src = background ?? picture
	$: dateRange = {
		start: new Date(($date?.selected ?? new Date()) - WEEK),
		end: new Date(($date?.selected ?? new Date()) + DAY)
	}
</script>

<section class="grid grid-cols-2 justify-between content-between select-none">
	<div class="flex gap-4 justify-between mb-4 col-start-1 col-end-3">
		<div>
			<p class="m-auto">{caption}</p>
			<slot />
		</div>

		<slot name="info" />
	</div>

	<div
		class="background grid grid-cols-1 grid-rows-2 col-start-1 col-end-3 row-start-2 row-end-4 rounded overflow-hidden"
	>
		<div class="col-start-1 row-start-1 row-end-3">
			<FallbackImage {src} alt={`${isTeam ? "team" : "user"} ${title}`} cover />
		</div>
		<div class="overlay col-start-1 row-start-1 row-end-3">&nbsp;</div>
		{#if isTeam || source === myId}
			<div class="col-start-1 row-start-1 row-end-3 self-start justify-self-end m-4">
				<EditButton entity={promise} {isTeam} />
			</div>
		{/if}
	</div>

	<div class="ml-4 col-start-1 row-start-2 self-center justify-start aspect-square h-8">
		<slot name="picture" />
	</div>

	<div class="col-start-1 col-end-3 row-start-3 row-end-4">
		<InfoCard>
			<p slot="title">{title ?? "unknown"}'s todos!</p>

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
</section>

<style>
	section {
		grid-template-rows: auto 6rem 1fr;
	}

	.background {
		aspect-ratio: 2 / 1;
	}

	.overlay {
		background-image: linear-gradient(transparent, transparent, #fff2, #fffb, var(--bg));
	}
</style>

<script lang="ts">
	import type { UserContentConfig } from "$lib/content/user/UserContent"
	import FallbackImage from "$lib/UI/Widgets/FallbackImage.svelte"
	import InfoCard from "$lib/UI/Widgets/InfoCard.svelte"
	import TodoList from "$lib/content/todo/TodoList.svelte"
	import { getTodoList } from "$lib/content/todo/TodoList"
	import session from "$lib/firebase/session"
	import type { TeamContentConfig } from "$lib/content/team/TeamContent"
	import DateInput from "$lib/UI/Widgets/DateInput.svelte"
	import EditButton from "$lib/UI/Widgets/EditButton.svelte"
	import type { AllContentTypes } from "./Content"
	import { base } from "$app/paths"

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

<section>
	<div class="header">
		<div class="description">
			<p>{caption}</p>
			<slot />
		</div>

		<div class="info"><slot name="info" /></div>
	</div>

	<div class="background">
		<div>
			<FallbackImage {src} alt={`${isTeam ? "team" : "user"} ${title}`} />
		</div>
		<div class="overlay">&nbsp;</div>
		{#if isTeam || source === myId}
			<div class="btn">
				<EditButton entity={promise} {isTeam} />
			</div>
		{/if}
	</div>

	<div class="picture">
		<slot name="picture" />
	</div>

	<div class="card">
		<InfoCard>
			<p slot="title">{title ?? "unknown"}'s todos!</p>

			<DateInput bind:date />

			{#await getTodoList({ source, isTeam, amount, dateRange }) then todos}
				<TodoList {todos} {source} {isTeam} />
			{/await}
		</InfoCard>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto 6rem 1fr;
		justify-content: space-between;
		align-content: space-between;
		user-select: none;
	}
	.background {
		aspect-ratio: 2 / 1;
		grid-column: 1 / 3;
		grid-row: 2 / 4;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		overflow: hidden;
	}
	.background > * {
		grid-row: 1 / 3;
		grid-column: 1;
	}
	.background > .btn {
		grid-row: 1 / 3;
		grid-column: 1;
		align-self: flex-start;
		justify-self: flex-end;
		margin: 1rem;
		overflow: hidden;
	}
	:global(.background > .btn button) {
		opacity: 0;
		transition: opacity 0.7s ease;
	}
	:global(.background:hover > .btn button) {
		opacity: 0.8;
	}
	@media only screen and (max-width: 31.25rem) {
		:global(.background > .btn button) {
			opacity: 1;
		}
	}
	.background > .overlay {
		background-image: linear-gradient(transparent, transparent, #fff2, #fffb, var(--bg));
	}
	.card {
		grid-column: 1 / 3;
		grid-row: 3 / 4;
	}

	.header {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		margin-bottom: 1rem;
		grid-column: 1 / 3;
	}
	.description {
		display: inherit;
	}
	.description > p {
		margin: auto;
	}
	.picture {
		margin-left: 1rem;
		grid-column: 1;
		grid-row: 2;
		align-self: center;
		justify-self: flex-start;
		height: 50%;
		aspect-ratio: 1;
	}
</style>

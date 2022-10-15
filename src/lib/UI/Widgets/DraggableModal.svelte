<script lang="ts">
	import { pipe } from "$lib/utils"
	import { fly, fade } from "svelte/transition"

	let state: "closed" | "open" | "full" = "closed"

	$: {
		document.body.style.overflow = state === "closed" ? "inherit" : "hidden"
	}

	export let maxVH = 90
	export let minVH = 85

	export const update = (change: typeof state) => () => {
		state = change
	}

	const close = () => (state = "closed")
	const open = () => (state = "open")
	const full = () => (state = "full")
	const windowkeypress = (e: KeyboardEvent) => () => {
		if (e.key === "Enter") {
			// validate
			close()
		} else if (e.key === "Escape" || e.key === "`") {
			close()
		}
	}

	const toggle = () => {
		if (state === "closed") {
			open()
		} else if (state === "open") {
			full()
		} else if (state === "full") {
			open()
		}
	}

	const convertTouchToClientY = (e: TouchEvent) => {
		const [touch] = e.touches
		return touch?.clientY ?? 0
	}

	let firstTouchLocation = 0

	const touchstart = (e: TouchEvent) =>
		pipe(
			() => e,
			convertTouchToClientY,
			(clientY) => (firstTouchLocation = clientY)
		)

	const drag = (e: TouchEvent) =>
		pipe(
			() => e,
			convertTouchToClientY,
			(clientY) => {
				if (!firstTouchLocation) return
				if (firstTouchLocation - clientY > 30) {
					full()
				} else if (firstTouchLocation - clientY < -30) {
					if (state === "full") {
						open()
						touchstart(e)
					} else {
						close()
					}
				}
			}
		)
</script>

<svelte:window on:keypress={windowkeypress} />

<slot name="button" />

{#if state !== "closed"}
	<div
		class="container"
		class:full={state === "full"}
		class:open={state === "open"}
		in:fade={{ duration: 250 }}
		out:fade={{ duration: 350 }}
		on:click={close}
		on:keypress={windowkeypress}
	>
		<div
			class="card"
			style="max-height: {maxVH}vh; min-height: {minVH}vh;"
			in:fly={{ y: 2000, duration: 250 }}
			out:fly={{ y: 1000, duration: 750 }}
			on:click|stopPropagation
			on:keypress|stopPropagation
		>
			<div
				class="interaction-header"
				on:touchstart={touchstart}
				on:touchmove|preventDefault={drag}
				on:dblclick|preventDefault={toggle}
			>
				<slot name="left">
					<p>&nbsp;</p>
				</slot>

				<div class="draggable-line" />

				<slot name="right">
					<p>&nbsp;</p>
				</slot>
			</div>

			<div class="inner-content">
				<slot {update} />
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
		z-index: 2;
		position: fixed;
		bottom: 0;
		left: 0;
		min-height: 100vh;
		max-height: 100vh;
		min-width: 100vw;
		max-width: 100vw;
		background: rgba(255, 255, 255, 0.75);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	.container.full .card {
		max-height: 100vh !important;
	}

	.card {
		transition: max-height 0.3s ease;
		background: var(--bg);
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
		border-top-left-radius: 19px;
		border-top-right-radius: 19px;
		max-width: 60vw;
		min-width: 60vw;
		min-height: 65vh;
		max-height: 65vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.interaction-header {
		padding: 0 3rem;
		min-height: 4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: move;
	}

	.draggable-line {
		height: 7.14px;
		background: #ececec;
		border-radius: 10px;
		width: 100px;
	}

	.inner-content {
		padding: 0 3rem;
		overflow-y: auto;
	}

	.inner-content::-webkit-scrollbar,
	.card::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (max-width: 100rem) {
		.card {
			min-width: 50vw;
		}
	}
	@media only screen and (max-width: 62.5rem) {
		.card {
			min-width: 70vw;
		}
	}
	@media only screen and (max-width: 31.25rem) {
		.card {
			min-width: 100vw;
		}
		.inner-content {
			padding: 0 1rem;
		}
		.interaction-header {
			padding: 0 1rem;
		}
	}
</style>

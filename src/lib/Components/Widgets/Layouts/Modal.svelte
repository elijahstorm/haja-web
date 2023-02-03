<script lang="ts">
	import { fade, scale } from "svelte/transition"

	export let caption: string | null = null

	$: open = false

	const close = () => {
		open = false
	}

	const activate = () => {
		open = true
	}

	const animation = {
		duration: 200
	}
</script>

{#if open}
	<section
		class="select-none overflow-y-auto py-16 px-8 content-center flex flex-col inset-0 fixed bg-black bg-opacity-80 z-10"
		on:click={close}
		on:keypress={close}
		in:fade={animation}
	>
		<content in:scale={animation}>
			<slot {open} />
		</content>
		{#if caption != null}
			<p class="my-8 mx-4 text-white">{caption}</p>
		{/if}
	</section>
{/if}

<div class="select-none cursor-pointer" on:click={activate} on:keypress={activate}>
	<slot {open} />
</div>

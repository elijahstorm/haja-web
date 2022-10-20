<script lang="ts">
	import { base } from "$app/paths"

	export let text: string
	export let name: string
	export let id: string
	export let type: string
	export let icon: string = ""

	export let required: boolean = false
	export let attempted: boolean = false

	$: iconHref = `background: url(${base}${icon}); background-size: 1.5rem auto; background-repeat: repeat;`
</script>

<div class="input-container">
	{#if icon != ""}
		<div class="input-icon icon-username" style={iconHref} />
	{/if}
	<input
		class:push={icon != ""}
		class:attempted
		{id}
		{name}
		placeholder={text}
		{type}
		{required}
	/>
</div>

<style>
	.input-container {
		position: relative;
		margin: 1rem 0 1rem 0;
	}
	.input-icon {
		position: absolute;
		bottom: 13px;
		margin-top: -9px;
		left: 12px;
		width: 1.5rem;
		height: 1.5rem;
	}
	.input-icon::after {
		content: "";
		position: absolute;
		right: -11px;
		top: -10px;
		bottom: -10px;
		width: 1px;
		opacity: 0.5;
		background-color: rgba(212, 212, 212, 0);
		background-image: -webkit-linear-gradient(
			bottom,
			rgba(212, 212, 212, 0) 0,
			#d4d4d4 30%,
			#d4d4d4 70%,
			rgba(212, 212, 212, 0) 100%
		);
		background-image: linear-gradient(
			to top,
			rgba(212, 212, 212, 0) 0,
			#d4d4d4 30%,
			#d4d4d4 70%,
			rgba(212, 212, 212, 0) 100%
		);
	}
	input {
		border: 1px solid var(--primary);
		padding: 1rem;
		border-radius: 0.5rem;
		font-size: 0.9rem;
		width: calc(100% - 2.125rem);
	}
	input.push {
		padding-left: 3.5rem;
		width: calc(100% - 4.7rem);
	}
	input.attempted:invalid {
		border: 1px solid var(--error-soft);
	}
</style>

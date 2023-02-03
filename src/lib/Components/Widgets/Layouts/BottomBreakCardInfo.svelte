<script lang="ts">
	export let text: string
	export let actionText: string
	export let href: string
</script>

<div class="p-6 border-t border-t-zinc-300 text-center bg-zinc-200 text-gray-500">
	{#if text}
		<span class="border border-transparent text-left text-gray-500 text-ms mt-6 py-2 px-0">
			{text}
		</span>
	{/if}
	{#if href}
		<a
			class="text-brand-500 no-underline border-b transition-colors border-transparent hover:border-b-brand-500"
			{href}>{actionText}</a
		>
	{/if}
</div>

<script lang="ts">
	export let title: string
	export let small = false
</script>

<div class="pb-2">
	<div class="flex justify-between content-center">
		{#if small}
			<h2 class="opacity-70 mb-3 text-lg font-medium text-gray-900 dark:text-gray-300">
				{title}
			</h2>
		{:else}
			<h2 class="text-2xl mb-4">{title}</h2>
		{/if}

		<slot name="action" />
	</div>

	<slot />
</div>

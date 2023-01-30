<script lang="ts">
	export let title: string
</script>

<div class="pb-2">
	<div class="flex justify-between content-center">
		<h2 class="text-2xl">{title}</h2>

		<slot name="action" />
	</div>

	<slot />
</div>

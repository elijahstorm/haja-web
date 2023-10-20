<script lang="ts">
	import ContentWithFooter from "$lib/Components/PageContainers/ContentWithFooter.svelte"
	import type { PageData } from "./$types"

	export let data: PageData

	let { message } = data
	$: ({ message } = data)
</script>

<ContentWithFooter>
	<div class="flex flex-col gap-3">
		<div>
			{@html message.html}
		</div>
	</div>
</ContentWithFooter>

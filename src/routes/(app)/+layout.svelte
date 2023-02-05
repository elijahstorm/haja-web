<script lang="ts">
	import { navigating } from "$app/stores"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import ContentWithFooter from "$lib/Components/PageContainers/ContentWithFooter.svelte"
</script>

<ContentWithFooter>
	<slot />
</ContentWithFooter>

{#if $navigating}
	<div class="fixed inset-0 bg-slate-400 bg-opacity-20">
		<div
			class="fixed inset-0 m-auto h-min w-min p-8 bg-white rounded-lg border border-solid border-black"
		>
			<Loader />
		</div>
	</div>
{/if}

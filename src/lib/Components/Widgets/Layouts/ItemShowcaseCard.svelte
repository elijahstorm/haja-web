<script lang="ts">
	import FallbackImage from "../Images/FallbackImage.svelte"

	export let id: string
	export let title: string
	export let picture: string
	export let subtext: string
	export let callToAction: string
</script>

<a class="flex items-center rounded-lg shadow-lg bg-stone-100 overflow-hidden" href="/team/{id}">
	<div class="w-32 h-32 flex-shrink-1">
		<FallbackImage src={picture} alt="landscape of {title}" />
	</div>

	<div class="text-left py-4 pl-6">
		<h2 class="font-semibold">{title}</h2>

		<h4 class="text-sm text-gray-500">{subtext}</h4>

		<p class="mt-4 text-sm text-brand-600">{callToAction}</p>
	</div>
</a>

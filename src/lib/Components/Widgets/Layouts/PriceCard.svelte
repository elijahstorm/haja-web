<script lang="ts">
	import { base } from "$app/paths"

	export let id: string
	export let title: string
	export let picture: string
	export let price: number
	export let propertyCount: number
</script>

<a
	class="flex items-center rounded-lg shadow-lg bg-stone-100 overflow-hidden"
	href="{base}/team/{id}"
>
	<img class="h-32 flex-shrink-0 aspect-square" src={picture} alt="landscape of {title}" />

	<div class="text-left py-4 pl-6">
		<h2 class="font-semibold">{title}</h2>

		<h4 class="text-sm text-gray-500">${price} / night average</h4>

		<p class="mt-4 text-sm text-brand-600">Explore {propertyCount} properties</p>
	</div>
</a>

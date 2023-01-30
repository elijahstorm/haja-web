<script lang="ts">
	import { goto } from "$app/navigation"
	import { base } from "$app/paths"

	export let id: number
	export let name: string
	export let img: string
	export let price: number
	export let propertyCount: number
</script>

<button
	class="flex items-center rounded-lg shadow-lg bg-white overflow-hidden"
	on:click={() => goto(base + "/destinations/" + id)}
>
	<img
		class="h-32 flex-shrink-0 aspect-square"
		src="{base}/img/destinations/{img}"
		alt="landscape of {name}"
	/>

	<div class="text-left py-4 pl-6">
		<h2 class="font-semibold">{name}</h2>

		<h4 class="text-sm text-gray-500">${price} / night average</h4>

		<p class="mt-4 text-sm text-brand-600">Explore {propertyCount} properties</p>
	</div>
</button>

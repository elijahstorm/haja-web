<script lang="ts">
	import Icon from "@iconify/svelte"

	export let icon: string = "typcn:edit"
	export let width: string = "20px"
	export let callback: VoidFunction
</script>

<button
	class="px-3 py-2 rounded-md bg-zinc-800 bg-opacity-90 hover:bg-zinc-900 transition shadow shadow-grey-400 border border-solid border-gray-500 text-white select-none"
	on:click={callback}
>
	<Icon {icon} {width} />
</button>

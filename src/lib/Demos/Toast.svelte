<!-- App.svelte -->
<script lang="ts">
	import { Toasts, addToast } from "as-toast"
</script>

<Toasts />

<button
	on:click={() => {
		addToast("Hello zWorld", "info")
		addToast("Hello World", "warn")
	}}
>
	add toast
</button>

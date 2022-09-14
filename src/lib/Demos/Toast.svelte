<!-- App.svelte -->
<script>
	import { Toasts, addToast } from "as-toast"
</script>

<Toasts />

<button
	on:click={() => {
		addToast("Hello World")
	}}
>
	add toast
</button>

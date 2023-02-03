<script lang="ts">
	import { page } from "$app/stores"
	import Casing from "$lib/Components/PageContainers/Casing.svelte"
	import FallbackImage from "$lib/Components/Widgets/Images/FallbackImage.svelte"
</script>

<Casing>
	<center>
		{$page.status}: {$page.error.message}
	</center>
	<FallbackImage alt={`${$page.status}, ${$page.error.message}`} />
</Casing>

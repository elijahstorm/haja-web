<script lang="ts">
	import Icon from "@iconify/svelte"
</script>

<div
	class="m-auto cursor-pointer pr-4"
	on:click={() => history.back()}
	on:keypress={() => history.back()}
>
	<Icon icon={"akar-icons:chevron-left"} color="var(--primary)" height={34} />
</div>

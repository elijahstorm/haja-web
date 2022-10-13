<script lang="ts">
	import Icon from "@iconify/svelte"
</script>

<div class="center" on:click={() => history.back()} on:keypress={() => history.back()}>
	<Icon icon={"akar-icons:chevron-left"} color="var(--primary)" height={34} />
</div>

<style>
	.center {
		margin: auto;
		padding-right: var(--default-padding);
		cursor: pointer;
	}
</style>

<script lang="ts">
	export let title: string
	export let info: string
	export let fileType: string
	export let fileName: string
	export let state: "ready" | "uploading" | "finished" | "failed" = "ready"
</script>

<div class="overlay" class:failed={state === "failed"}>
	<p class="title">{title}</p>
	<p class="info">{info}</p>
	<p class="extension">{fileType}</p>
	<p class="file">{fileName}</p>
</div>

<style>
	.overlay {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 2rem 1.5rem repeat(2, 1fr);
		transition: all 0.6s ease;
		position: relative;
		z-index: 1;
		background-image: linear-gradient(
			#000f,
			#0009,
			#0007,
			#0003,
			transparent,
			transparent,
			transparent
		);
	}

	.overlay::before {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		transition: opacity 0.6s ease;
		opacity: 0;

		background-image: linear-gradient(
			#f00f,
			#f009,
			#f007,
			#f003,
			transparent,
			transparent,
			transparent
		);
	}

	.overlay.failed::before {
		opacity: 1;
	}

	.title,
	.info,
	.file,
	.extension {
		z-index: 2;
		font-size: 0.7rem;
		padding: 1rem;
		color: var(--bg);
		text-overflow: ellipsis;
	}

	.title {
		font-size: 1rem;
		grid-row: 2;
		grid-column: 1;
	}

	.info {
		grid-row: 3;
		grid-column: 1;
	}

	.file {
		grid-row: 1;
		grid-column: 1;
	}

	.extension {
		grid-row: 1;
		grid-column: 2;
	}
</style>

<script lang="ts">
	import { updateDocument } from "$lib/firebase/firestore"
	import { uploadFileAndGetUrl } from "$lib/firebase/storage"
	import Icon from "@iconify/svelte"
	import FallbackImage from "./FallbackImage.svelte"
	import Loader from "./Loader.svelte"
	import ImageGradientOverlay from "./Helpers/ImageGradientOverlay.svelte"
	import Cropper from "svelte-easy-crop"
	import { addToast } from "as-toast"

	let crop = { x: 0, y: 0 }
	let zoom = 1
	let image = "https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg"

	const fallback = "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"

	export let id: string
	export let source: string = null
	export let type: string = null
	export let isTeam: boolean
	export let src: string = fallback
	export let alt: string
	export let dest: string = "picture"
	export let oncomplete: () => void = () => {}

	const accept = ".jpg, .jpeg, .png, .svg"
	const icon = "akar-icons:cloud-upload"
	const failedIcon = "akar-icons:triangle-alert-fill"
	const finishedIcon = "ic:round-cloud-done"
	const width = "3rem"

	let fileinput
	let fileName = ""
	let fileType = ""
	let status = null
	let state: "ready" | "uploading" | "finished" | "failed" = "ready"

	$: {
		if (src) {
			fileName = decodeURIComponent(src).split("/").pop().split("?").shift()
			fileType = `.${src.split(".").pop().split("?").shift()}`
		}
	}

	const onFileSelected = async (e) => {
		const blob = e.target.files[0]

		const reader = new FileReader()
		reader.readAsDataURL(blob)
		reader.onload = (e) => {
			src = e.target.result as string
		}

		state = "uploading"

		try {
			const picture = (
				await uploadFileAndGetUrl({
					type,
					source,
					isTeam,
					id: `${id}/${blob.name}`,
					blob
				})
			).replace(import.meta.env.VITE_STORAGE_URL_PREFIX, "")

			updateDocument({
				type,
				id,
				source,
				isTeam,
				content: {
					[dest]: picture
				},
				timestamp: "updatedOn"
			}).then((response) => {
				addToast("Image uploaded")
				state = "finished"
				oncomplete()
			})
		} catch (e) {
			state = "failed"
			status = e
		}
	}

	const open = () => {
		fileinput.click()
	}
</script>

<section class="flex items-center justify-center flow-c">
	<button
		class="image-uploader-container w-full overflow-clip text-left rounded-lg relative cursor-pointer grid grid-cols-1 grid-rows-1 border border-gray-400 max-h-96"
		on:click={open}
	>
		<FallbackImage {src} {alt} {fallback} />
		<!-- <Cropper {image} bind:crop bind:zoom /> -->

		<ImageGradientOverlay title="Your {dest}" info={""} {fileType} {fileName} {state} />

		<div
			class="upload-interation-icon cursor-pointer z-50 opacity-0 transition-opacity duration-500 bg-white p-4 m-4 border border-gray-300 rounded-full"
			class:opacity-100={state != "ready"}
		>
			{#if state == "ready"}
				<Icon {icon} {width} />
			{:else if state == "uploading"}
				<Loader />
			{:else if state == "failed"}
				<Icon icon={failedIcon} {width} color={"var(--error)"} />
				<div class="flex flex-col items-center">
					<p
						class="absolute mt-8 py-2 px-4 text-red-500 bg-red-100 rounded-lg border border-red-500"
					>
						{status}
					</p>
				</div>
			{:else if state == "finished"}
				<Icon icon={finishedIcon} {width} color={"var(--primary)"} />
			{/if}
		</div>
	</button>

	<input class="hidden" type="file" {accept} on:change={onFileSelected} bind:this={fileinput} />
</section>

<style>
	:global(.image-uploader-container > *) {
		grid-row: 1;
		grid-column: 1;
		align-self: center;
		justify-self: center;
	}

	.image-uploader-container:is(:focus, :hover) .upload-interation-icon {
		opacity: 1;
	}
</style>

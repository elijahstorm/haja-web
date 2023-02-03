<script lang="ts">
	import { navigating } from "$app/stores"
	import Loader from "$lib/Components/Widgets/Helpers/Loader.svelte"
	import { Toasts } from "as-toast"
	import github from "$lib/images/github.svg"
	import "../app.css"
	import { base } from "$app/paths"

	const footerSections = [
		{
			links: [
				{
					href: "/download",
					text: "Download the App"
				}
			],
			hash: Math.random()
		},
		{
			links: [
				{
					href: "/about",
					text: "About"
				}
			],
			hash: Math.random()
		},
		{
			links: [
				{
					href: "http://elijahstorm.github.io/",
					text: "More by Elijah"
				}
			],
			hash: Math.random()
		}
	]
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex-1 bg-slate-50">
	<slot />
</div>

{#if $navigating}
	<div class="fixed inset-0 bg-slate-400 bg-opacity-20">
		<div
			class="fixed inset-0 m-auto h-min w-min p-8 bg-white rounded-lg border border-solid border-black"
		>
			<Loader />
		</div>
	</div>
{/if}

<Toasts />

<footer class="px-8 py-6 bg-stone-300 text-stone-900 tracking-normal flex justify-center">
	<div class="max-w-4xl flex-1 grid grid-cols-3 gap-6">
		<a class="contents" href="/" target="_blank" rel="noopener noreferrer">
			<img class="h-10" src="{base}/images/haja/logo_horizontal_black.png" alt="Haja logo" />
		</a>

		<a
			class="contents"
			href="https://github.com/elijahstorm"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img class="w-8 col-start-3 justify-self-end" src={github} alt="GitHub" />
		</a>

		{#each footerSections as footerSection (footerSection.hash)}
			<div class="flex flex-col space-y-2">
				{#each footerSection.links as link (link.href)}
					<a
						class="hover:underline"
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.text}
					</a>
				{/each}
			</div>
		{/each}

		<p class="col-start-2 row-start-3 justify-self-center self-end">© Haja 2023</p>
	</div>
</footer>

<script lang="ts">
	import { base } from "$app/paths"
	import LoginHeader from "../Auth/LoginHeader.svelte"

	const iconSocialLinks = [
		{
			href: "https://github.com/elijahstorm",
			icon: "icons/github-mark-white.svg",
			alt: "GitHub"
		}
	]

	const footerLinks = [
		{
			href: base + "/download",
			text: "Download the App"
		},
		{
			href: base + "/about",
			text: "About"
		},
		{
			href: base + "/contact",
			text: "Contact Us"
		},
		{
			href: base + "/support",
			text: "Support"
		},
		{
			href: base + "/privacy",
			text: "Privacy Policy"
		},
		{
			href: "http://elijahstorm.github.io/",
			text: "More by Elijah"
		}
	]
</script>

<div class="flex-1 bg-slate-50">
	<slot />
</div>

<footer class="bg-primary-dark-blue py-10">
	<div class="container">
		<div
			class="text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0"
		>
			<div class="flex flex-col justify-between lg:justify-self-start lg:col-span-3">
				<a class="contents" href={base} target="_blank" rel="noopener noreferrer">
					<img
						class="mb-7 w-24"
						src="images/haja/logo_horizontal_full.png"
						alt="haja logo"
					/>
				</a>

				<div class="flex justify-center lg:justify-between items-center gap-4">
					{#each iconSocialLinks as link (link.href)}
						<a
							class="contents"
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								class="w-6 col-start-3 justify-self-end"
								src={link.icon}
								alt={link.alt}
							/>
						</a>
					{/each}
				</div>
			</div>

			<div
				class="grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white text-sm lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense"
			>
				{#each footerLinks as link (link.href)}
					<a
						class="hover:text-green-400"
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.text}
					</a>
				{/each}
			</div>

			<div
				class="flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4 gap-4"
			>
				<LoginHeader />

				<p class="text-neutral-grayish-blue text-sm">© Haja. All Rights Reserved</p>
			</div>
		</div>
	</div>
</footer>

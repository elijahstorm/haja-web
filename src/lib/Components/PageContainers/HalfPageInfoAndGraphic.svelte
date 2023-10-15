<script lang="ts">
	import Logo from "$lib/Components/Branding/Logo.svelte"

	const icons = {
		calendar: "/icon/calendar.svg",
		events: "/icon/events.svg",
		girlParty: "/icon/girl-party.svg",
		halloween: "/icon/halloween.svg",
		heart: "/icon/heart.svg",
		hospital: "/icon/hospital.svg",
		toronto: "/icon/toronto.svg",
		welcome: "/icon/welcome.svg",
	}

	export let icon: keyof typeof icons = "events"
</script>

<div class="absolute inset-0 flex bg-white">
	<div
		class="flex-2 max-w-xl bg-brand-900 select-none overflow-hidden p-16 pb-0 flex-col hidden md:flex"
	>
		<div class="flex-1 w-full m-auto my-0 max-w-xs">
			<Logo height={200} />
		</div>
		<div class="flex-1 w-full m-auto max-w-xs relative mb-8 h-0">
			<img class="absolute" src="/icon/blob.svg" alt="white background" />
			<img class="absolute" src={icons[icon]} alt="haja-icon" />
		</div>
	</div>

	<div
		class="flex flex-col flex-3 max-w-2xl overflow-y-auto overflow-hidden py-16 px-4 md:p-16 md:pb-0"
	>
		<div class="my-0 mx-auto max-w-xs opacity-0 hidden sm:block sm:opacity-100">
			<Logo height={100} />
		</div>
		<slot />
		<img
			class="m-auto max-w-xs block opacity-100 md:hidden md:opacity-0"
			src={icons[icon]}
			alt="haja-icon"
		/>
	</div>
</div>

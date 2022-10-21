<script lang="ts">
	import FormInfoRequestCard from "$lib/UI/Widgets/FormInfoRequestCard.svelte"
	import SmallCenterContentOverBackground from "$lib/UI/PageContainers/SmallCenterContentOverBackground.svelte"
	import { lostPassword } from "$lib/firebase/auth"
	import InfoCard from "$lib/UI/Widgets/InfoCard.svelte"

	const callback = async (form) => {
		started = true
		formSent = lostPassword(form["email"].value)
		return ""
	}

	const retry = () => {
		started = false
		formSent = null
	}

	let formSent
	$: started = false
</script>

<SmallCenterContentOverBackground>
	{#if started}
		<InfoCard>
			{#await formSent}
				Sending....
			{:then response}
				{#if response.error}
					<p>
						{response.error}
					</p>
					<button class="button" on:click={retry}>Retry</button>
				{:else}
					A password change email was sent
				{/if}
			{/await}
		</InfoCard>
	{:else}
		<FormInfoRequestCard
			{callback}
			inputs={[
				{
					text: "Email",
					id: "email",
					type: "email",
					icon: "/icon/person.svg"
				}
			]}
		>
			<div slot="title">Lost Email</div>
			<div slot="button">Request email</div>
		</FormInfoRequestCard>
	{/if}
</SmallCenterContentOverBackground>

<style>
	button {
		margin: 1rem auto;
	}
</style>

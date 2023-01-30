<script lang="ts">
	import FormInfoRequestCard from "$lib/UI/Widgets/FormInfoRequestCard.svelte"
	import SmallCenterContentOverBackground from "$lib/UI/PageContainers/SmallCenterContentOverBackground.svelte"
	import { lostPassword } from "$lib/firebase/auth"
	import InfoCard from "$lib/UI/Widgets/InfoCard.svelte"
	import BottomBreakCardInfo from "$lib/UI/Widgets/BottomBreakCardInfo.svelte"
	import { base } from "$app/paths"

	const callback = async (form: HTMLFormElement) => {
		formSent = lostPassword(form["email"].value)
		started = true

		return ""
	}

	let formSent: Promise<{ error?: string }>
	$: started = false
</script>

<SmallCenterContentOverBackground>
	{#if started}
		<InfoCard>
			{#await formSent}
				Sending....
			{:then response}
				{#if response.error}
					{response.error}
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
			<div slot="bottom">
				<BottomBreakCardInfo
					text="New to Haja?"
					actionText="Sign up"
					href="{base}/login/signup"
				/>
			</div>
		</FormInfoRequestCard>
	{/if}
</SmallCenterContentOverBackground>

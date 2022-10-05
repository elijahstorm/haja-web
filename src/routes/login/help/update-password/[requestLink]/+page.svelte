<script lang="ts">
	import FormInfoRequestCard from "$lib/UI/Widgets/FormInfoRequestCard.svelte"
	import SmallCenterContentOverBackground from "$lib/UI/PageContainers/SmallCenterContentOverBackground.svelte"
	import { updatePassword } from "firebase/auth"
	import { base } from "$app/paths"

	export let data

	let { requestLink } = data
	$: ({ requestLink } = data)

	const callback = async (form) => {
		return "Not handled in broswer. Please check your email for the next step."
	}

	$: success = false
	$: loggedIn = false
</script>

<SmallCenterContentOverBackground>
	{#if !success}
		<FormInfoRequestCard
			{callback}
			inputs={[
				...(loggedIn
					? [
							{
								text: "Current Password",
								id: "cur_password",
								type: "password",
								icon: "/icon/key.svg"
							}
					  ]
					: []),
				...[
					{
						text: "New Password",
						id: "password",
						type: "password",
						icon: "/icon/key.svg"
					},
					{
						text: "Confirm Password",
						id: "pass_confirm",
						type: "password",
						icon: "/icon/key.svg"
					}
				]
			]}
		>
			<div slot="title">Update Password</div>
			<div slot="button">Update</div>
		</FormInfoRequestCard>
	{:else}
		<span>Password updated. </span>
		<a href="{base}/login">Login</a>
	{/if}
</SmallCenterContentOverBackground>

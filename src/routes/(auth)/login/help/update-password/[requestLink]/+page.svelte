<script lang="ts">
	import FormInfoRequestCard from "$lib/Components/Widgets/FormWidgets/FormInfoRequestCard.svelte"
	import SmallCenterContentOverBackground from "$lib/Components/PageContainers/SmallCenterContentOverBackground.svelte"
	import BottomBreakCardInfo from "$lib/Components/Widgets/Layouts/BottomBreakCardInfo.svelte"

	const callback = async (form) => {
		return { error: "Not handled in broswer. Please check your email for the next step." }
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
								icon: "/icon/key.svg",
							},
					  ]
					: []),
				...[
					{
						text: "New Password",
						id: "password",
						type: "password",
						icon: "/icon/key.svg",
					},
					{
						text: "Confirm Password",
						id: "pass_confirm",
						type: "password",
						icon: "/icon/key.svg",
					},
				],
			]}
		>
			<div slot="title">Update Password</div>
			<div slot="button">Update</div>
			<div slot="bottom">
				<BottomBreakCardInfo text="New to Haja?" actionText="Sign up" href="/signup" />
			</div>
		</FormInfoRequestCard>
	{:else}
		<span>Password updated. </span>
		<a href="/login">Login</a>
	{/if}
</SmallCenterContentOverBackground>

<script lang="ts">
	import FormInfoRequestCard from "$lib/UI/Widgets/FormInfoRequestCard.svelte"
	import SmallCenterContentOverBackground from "$lib/UI/PageContainers/SmallCenterContentOverBackground.svelte"
	import { newUser } from "$lib/firebase/auth"
	import { base } from "$app/paths"

	const callback = async (form) => {
		const { error } = await newUser(form["email"].value, form["password"].value)

		return error
	}
</script>

<SmallCenterContentOverBackground>
	<FormInfoRequestCard
		{callback}
		inputs={[
			{
				text: "Email",
				id: "email",
				type: "email",
				icon: "/icon/person.svg"
			},
			{
				text: "Password",
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
		]}
	>
		<div slot="title">Signup</div>
		<div slot="button">Signup</div>
		<div slot="help">Start using Haja today! Enter your email and create a new password</div>
		<div slot="bottom">
			<span> Already have an account? </span>
			<a href="{base}/login">Login</a>
		</div>
	</FormInfoRequestCard>
</SmallCenterContentOverBackground>

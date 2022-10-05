<script lang="ts">
	import { onMount } from "svelte"
	import { loginWithInfo, loginWithGoogle, loginWithFacebook } from "$lib/firebase/auth"
	import { fade } from "svelte/transition"
	import Icon from "@iconify/svelte"
	import { base } from "$app/paths"

	export let shadow = false

	$: shrunk = true
	$: attempted = false

	onMount(() => {
		shrunk = false
	})

	let email: string = ""
	let password: string = ""
	$: errorReport = null

	const submit = async (e) => {
		const { error } = await loginWithInfo(email, password)
		errorReport = error
		attempted = true
	}

	const google = async (e) => {
		const { error } = await loginWithGoogle()
		errorReport = error
	}
	const facebook = async (e) => {
		const { error } = await loginWithFacebook()
		errorReport = error
		errorReport = "facebook not started"
	}
</script>

<section class:shrunk class:shadow>
	<form class:attempted on:submit|preventDefault={submit}>
		<div class="container">
			<div class="header">
				<img class="logo" src="{base}/haja/logo_horizontal_full.png" alt="haja" />
			</div>

			{#if errorReport}
				<div class="error" in:fade>
					{errorReport}
				</div>
			{:else}
				<div class="error">&nbsp;</div>
			{/if}

			<label for="email">Email</label>
			<input type="email" placeholder="Email" required bind:value={email} />

			<label for="psw">Password</label>
			<input type="password" placeholder="Password" required bind:value={password} />

			<button type="submit">Login</button>

			<div class="providers">
				<div class="icon" on:click={google}>
					<Icon icon="akar-icons:google-fill" width />
				</div>
				<div class="icon" on:click={facebook}>
					<Icon icon="akar-icons:facebook-fill" />
				</div>
			</div>

			<div class="bottom">
				<p class="help">
					<span> New to Haja? </span>
					<a href="{base}/login/signup">Sign up</a>
				</p>
				<p class="help">
					<span> Can't log in? </span>
					<a href="{base}/login/help/lost-email">Recover account</a>
				</p>
				<!-- Removed because this action is not allowed -->
				<!-- <p class="help">
					<span> Lost your </span>
					<a href="{base}/login/help/forgot-password">password?</a>
				</p> -->
			</div>
		</div>
	</form>
</section>

<style>
	section {
		transition: 0.6s;
	}
	.shadow {
		box-shadow: 0px 9px 20px 8px rgb(0 0 0 / 12%);
	}
	.shrunk {
		transform: scale(0);
	}
	* {
		letter-spacing: 0px;
	}

	label {
		font-size: 0.9rem;
	}
	input[type="email"],
	input[type="password"] {
		width: 100%;
		padding: 0.5rem 1rem;
		margin: 0.5rem 0 1rem 0;
		display: inline-block;
		border: 0;
		background-color: var(--bg);
		box-sizing: border-box;
		border-radius: 3rem;
		transition: 0.3s;
		background-color: #00000013;
	}
	input:focus {
		border: 0;
		box-shadow: 0px 0px 2px 2px var(--primary-hl);
		outline: none;
	}
	.attempted > * > input:invalid {
		box-shadow: 0px 0px 1px 1px var(--error);
	}

	button {
		background-color: var(--primary);
		color: white;
		font-size: 0.9rem;
		padding: 0.8rem 20px;
		margin: 0.5rem 0 0.5rem 0;
		line-height: 1.3rem;
		border: none;
		cursor: pointer;
		width: 100%;
		border-radius: 2rem;
		transition: 0.3s;
		box-shadow: 0px 6px 7px 2px var(--primary-o);
	}

	button:hover {
		opacity: 0.8;
	}

	.container {
		padding: 1rem;
		margin-bottom: 5rem;
	}

	.error {
		color: red;
		margin: 0 0 1rem 0;
	}

	.providers {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
		margin: 1rem 0 2rem 0;
	}
	.providers > * {
		border-radius: 50%;
		width: 1.5rem;
		height: 1.5rem;
		border: 1px solid #555;
		padding: 0.5rem;
		cursor: pointer;
		display: block;
	}
	.icon {
		font-size: 1.5rem;
	}

	.help {
		font-size: 0.9rem;
		margin-top: 1rem;
	}

	.header {
		margin: 1rem 0;
		font-size: 0.9rem;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
	}
	.header > * {
		align-self: center;
	}

	@media only screen and (max-width: 37.5em) {
		.header {
			display: none;
		}
	}

	.logo {
		width: 6rem;
	}

	form {
		background-color: var(--bg);
	}

	.bottom {
		border-top: 1px solid #ddd;
		padding: 1rem 0;
	}
	.bottom a {
		color: var(--primary);
		text-decoration: none;
		border-bottom: 1px transparent;
		border-bottom-color: var(--transparent);
		transition: border-bottom-color 0.3s;
	}
	.bottom a:hover {
		border-bottom: 1px solid;
	}
</style>

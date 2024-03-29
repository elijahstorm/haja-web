<script lang="ts">
	import { onMount } from "svelte"
	import { loginWithInfo, loginWithGoogle, loginWithFacebook } from "$lib/firebase/auth"
	import { fade } from "svelte/transition"
	import Icon from "@iconify/svelte"

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
		attempted = true
		const { error } = await loginWithInfo(email, password)
		errorReport = error
	}

	const google = async (e) => {
		const { error } = await loginWithGoogle()
		errorReport = error
	}
	const facebook = async (e) => {
		const { error } = await loginWithFacebook()
		errorReport = error
		errorReport = "Facebook Login is not implemented or not supported/enabled."
	}
</script>

<section class:shrunk class:shadow>
	<form class:attempted on:submit|preventDefault={submit}>
		<div class="p-4 mb-20">
			<div class="flex gap-2 text-sm my-4 sm:hidden">
				<img class="w-24" src="/images/haja/logo_horizontal_full.png" alt="haja" />
			</div>

			{#if errorReport}
				<div class="text-red-500 mb-4" in:fade>
					{errorReport}
				</div>
			{:else}
				<div class="text-red-500 mb-4">&nbsp;</div>
			{/if}

			<label class="text-sm" for="email">Email</label>
			<input
				class="w-full py-2 px-4 mt-2 mb-4 mx-0 inline-block border-0 box-border rounded-3xl transition-all outline-none"
				type="email"
				placeholder="Email"
				required
				bind:value={email}
			/>

			<label class="text-sm" for="psw">Password</label>
			<input
				class="w-full py-2 px-4 mt-2 mb-4 mx-0 inline-block border-0 box-border rounded-3xl transition-all outline-none"
				type="password"
				placeholder="Password"
				required
				bind:value={password}
			/>

			{#if attempted && !errorReport}
				<button
					class="bg-brand-500 text-white text-sm py-3 px-5 my-2 mx-0 border-none w-full rounded-3xl transition hover:opacity-80"
				>
					Loading...
				</button>
			{:else}
				<button
					class="bg-brand-500 text-white text-sm py-3 px-5 my-2 mx-0 border-none w-full rounded-3xl transition hover:opacity-80"
					type="submit"
				>
					Login
				</button>
			{/if}

			<div class="flex justify-center gap-8 mt-4 mb-8 mx-0">
				<div
					class="rounded-full w-7 h-7 border border-gray-500 p-1 cursor-pointer text-lg"
					on:click={google}
					on:keydown={google}
					role="button"
					tabindex="0"
				>
					<Icon icon="akar-icons:google-fill" />
				</div>
				<div
					class="rounded-full w-7 h-7 border border-gray-500 p-1 cursor-pointer text-lg"
					on:click={facebook}
					on:keydown={facebook}
					role="button"
					tabindex="0"
				>
					<Icon icon="akar-icons:facebook-fill" />
				</div>
			</div>

			<div class="py-4 border-t border-t-grey-800">
				<p class="mt-4 text-sm">
					<span> New to Haja? </span>
					<a
						class="text-brand-500 no-underline border-b border-b-transparent transition-colors hover:border-b-brand-500"
						href="/signup">Sign up</a
					>
				</p>
				<p class="mt-4 text-sm">
					<span> Can't log in? </span>
					<a
						class="text-brand-500 no-underline border-b border-b-transparent transition-colors hover:border-b-brand-500"
						href="/login/help/lost-email">Recover account</a
					>
				</p>
				<!-- Removed because this action is not allowed -->
				<!-- <p class="mt-4 text-sm">
					<span> Lost your </span>
					<a class="text-brand-500 no-underline border-b border-b-transparent transition-colors hover:border-b-brand-500" href="/login/help/forgot-password">password?</a>
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

	input:focus {
		box-shadow: 0px 0px 2px 2px var(--primary-hl);
	}
	.attempted > * > input:invalid {
		box-shadow: 0px 0px 1px 1px var(--error);
	}

	button {
		box-shadow: 0px 6px 7px 2px var(--primary-o);
	}
</style>

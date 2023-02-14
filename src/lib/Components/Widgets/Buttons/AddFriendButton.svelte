<script lang="ts">
	import type { UserContentConfig } from "$lib/Components/Content/User/UserContent"

	import Icon from "@iconify/svelte"
	import { addToast } from "as-toast"

	export let user: UserContentConfig

	let state: "requesting" | "successfully-sent" | "failed" | "not-interacted" = "not-interacted"

	const dataByState: {
		[K in keyof typeof state]: {
			text: string
			class: string
			icon: string
		}
	} = {
		"not-interacted": {
			text: "Add Friend",
			class: "bg-brand-600 hover:bg-brand-700 text-white",
			icon: "fluent-mdl2:add-friend"
		},
		requesting: {
			text: "Sending",
			class: "bg-brand-300 disabled text-white",
			icon: "eos-icons:loading"
		},
		"successfully-sent": {
			text: "Friends",
			class: "bg-brand-50 text-brand-500 border border-gray-300",
			icon: "mdi:account-multiple-success"
		},
		failed: {
			text: "Error",
			class: "bg-red-600 hover:bg-red-700 text-white",
			icon: "ic:baseline-fmd-bad"
		}
	}

	let currentState = dataByState["not-interacted"]
	$: currentState = dataByState[state]

	const addFriend = (user: UserContentConfig) => () => {
		state = "requesting"

		setTimeout(() => (state = "failed"), 2000)
		setTimeout(() => (state = "successfully-sent"), 4000)
	}

	const getError = () => addToast("There was an connecting to Haja. Please trya gain later")
</script>

<button
	class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md w-max {currentState.class}"
	disabled={state === "requesting"}
	on:click={state === "failed" ? getError : addFriend(user)}
>
	<Icon icon={currentState.icon} />

	<span class="ml-2 hidden sm:block"> {currentState.text} </span>
</button>

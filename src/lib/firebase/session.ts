import { writable } from "svelte/store"
import type { UserInfo } from "firebase/auth"

const session = writable<{
	user?: UserInfo
	ready: boolean
	waitingCreationFlow: boolean
}>({
	user: null,
	ready: false,
	waitingCreationFlow: false,
})

export default {
	subscribe: session.subscribe,
	set: session.set,
	update: session.update,
}

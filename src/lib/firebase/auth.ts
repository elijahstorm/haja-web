import "./firebase"
import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	updatePassword
} from "firebase/auth"
import session from "./session"
import { ErrorMessaging } from "./errors"
import { uploadDocument } from "./firestore"
import type { TodoContentConfig } from "$lib/content/todo/TodoContent"

const auth = getAuth()

const loginPipe: (pipe: () => Promise<void>) => Promise<{ error?: string }> = async (pipe) =>
	await new Promise((resolve) => {
		pipe()
			.then(() => {
				resolve({})
			})
			.catch((e) => {
				resolve({
					error: ErrorMessaging(e.code)
				})
			})
	})

export const awaitMyId: () => Promise<string> = () =>
	new Promise<string>((resolveOuter) => {
		const existing = myId()

		if (existing != null) {
			resolveOuter(existing)
			return
		}

		session.subscribe(async ({ user, ready }) => {
			if (!ready) return

			resolveOuter(user?.uid ?? "")
		})
	})
export const myId = (): string | null => auth.currentUser?.uid

export const loginWithGoogle = () =>
	loginPipe(async () => {
		await signInWithPopup(auth, new GoogleAuthProvider())
	})
export const loginWithFacebook = () =>
	loginPipe(async () => {
		await signInWithPopup(auth, new FacebookAuthProvider())
	})
export const loginWithInfo = (email: string, password: string) =>
	loginPipe(async () => {
		await signInWithEmailAndPassword(auth, email, password)
	})
export const newUser = (email: string, password: string) =>
	loginPipe(async () => {
		session.update((session) => ({ ...session, waitingCreationFlow: true }))

		await createUserWithEmailAndPassword(auth, email, password)
		await sendEmailVerification(auth.currentUser)

		// auto-onboarding content for the user to experiment with

		const editTodoPrompt: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: "Oops, there's a typo in this toxdo...",
			caption: "Tap on the text, and then press edit to fix it",
			status: "todo",
			type: "from_haja",
			date: new Date(new Date().setSeconds(new Date().getSeconds() - 2))
		}
		const editActionContent: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: "Customize your profile and add your favorite images!",
			caption: "You can add a caption to your profile and each team you've created",
			status: "todo",
			type: "from_haja",
			date: new Date(new Date().setSeconds(new Date().getSeconds() - 1))
		}
		const welcomeContent: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: "Welcome to Haja! Get started by tapping (+) Add",
			caption: "We are glad to help you :)",
			status: "todo",
			type: "from_haja",
			date: new Date()
		}
		const aniversaryContent: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: `Happy Aniversary!!`,
			caption: "Thanks for using Haja for 1 year :)",
			status: "todo",
			type: "from_haja",
			date: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
		}
		const uploadOrderList = [
			welcomeContent,
			editActionContent,
			editTodoPrompt,
			aniversaryContent
		]
		const source = await awaitMyId()
		const isTeam = false

		await uploadDocument({
			id: source,
			isTeam,
			content: {
				email,
				caption: "Edit your profile"
			}
		})

		for (let i = 0; i < uploadOrderList.length; i++) {
			const content = uploadOrderList[i]
			await uploadDocument({
				source,
				isTeam,
				content,
				type: "todo"
			})
		}

		session.update((session) => ({ ...session, waitingCreationFlow: false }))
	})
export const changePassword = (password: string, requestLink?: string) =>
	loginPipe(async () => {
		await updatePassword(auth.currentUser, password)
	})
export const lostPassword = (email: string) =>
	loginPipe(async () => {
		await sendPasswordResetEmail(auth, email)
	})

export const signOut = () => {
	auth.signOut()
}

onAuthStateChanged(auth, (user) => {
	session.update((session) => ({
		...session,
		user,
		ready: true
	}))
})

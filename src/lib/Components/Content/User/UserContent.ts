import { getDocument } from "$lib/firebase/firestore"
import type { ContentConfig } from "$lib/Components/Content/Content"

export interface UserContentConfig extends ContentConfig {
	picture?: string
	background?: string
	email?: string
	pronouns?: string[]
	private?: boolean
	verified?: boolean
	following?: string[]
	contentType: "user"
}

export const getUser: (input: { id: string }) => Promise<UserContentConfig | string> = async ({
	id,
}) => {
	let doc,
		error: string | null = null

	try {
		doc = await getDocument({ isTeam: false, id })
	} catch (e) {
		error = e
		return e
	}

	if (doc.exists()) {
		const data = doc.data() as UserContentConfig

		return {
			contentType: "user",
			id: data.id ?? doc.id,
			title: data.title?.trim() ?? "Anon",
			caption: data.caption?.trim() ?? "",
			picture: `${import.meta.env.VITE_STORAGE_URL_PREFIX}${data.picture}`,
			background: !data.background
				? "/placeholders/5183000.jpg"
				: `${import.meta.env.VITE_STORAGE_URL_PREFIX}${data.background}`,
			email: data.email ?? "",
			pronouns: data.pronouns ?? "",
			private: data.private ?? false,
			verified: data.verified ?? false,
			following: data.following ?? [],
		}
	}

	return "This user does not exist!"
}

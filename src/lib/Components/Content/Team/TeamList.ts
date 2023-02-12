import { awaitMyId } from "$lib/firebase/auth"
import { storeQuery } from "$lib/firebase/firestore"
import type { DocumentData, QuerySnapshot } from "firebase/firestore"
import type { TeamContentConfig } from "./TeamContent"

export const getTeamList: (input: {
	query?: string
	value?: string | Promise<string>
	amount?: number
}) => Promise<TeamContentConfig[] | string> = async ({
	query = "users",
	value = awaitMyId(),
	amount = 10
}) => {
	let list: QuerySnapshot<DocumentData>

	value = await value

	try {
		list = await storeQuery({
			isTeam: true,
			amount,
			queries: [
				{
					type: query,
					compare: "array-contains",
					value
				}
			]
		})
	} catch (e) {
		return e
	}

	return list.docs.map((doc) => {
		const data = doc.data()

		return {
			contentType: "team",
			id: data.id ?? doc.id,
			title: data.title?.trim(),
			caption: data.caption?.trim(),
			picture: `${import.meta.env.VITE_STORAGE_URL_PREFIX}${data.picture}`,
			private: data.private,
			users: data.users
		}
	})
}

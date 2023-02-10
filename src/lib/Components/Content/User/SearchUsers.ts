import { myId } from "$lib/firebase/auth"
import { storeQuery } from "$lib/firebase/firestore"
import type { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore"
import type { UserContentConfig } from "./UserContent"

export const getRecommendedUsers: (input: {
	value?: string
	amount?: number
}) => Promise<UserContentConfig[] | string> = ({ value = myId(), amount = 5 }) =>
	performQuery({
		queries: [
			{
				type: "id",
				compare: "array-contains",
				value
			}
		],
		orderBy: "updatedOn",
		amount,
		value
	})

export const getUsersSearch: (input: {
	value: string
	exclude?: string[]
	amount?: number
}) => Promise<UserContentConfig[] | string> = ({ value, exclude = [], amount = 10 }) =>
	performQuery({
		queries: [
			{
				type: "title",
				compare: ">=",
				value
			},
			{
				type: "title",
				compare: "<",
				value: value + "z"
			},
			{
				type: "id",
				comapre: "not-in",
				value: exclude
			}
		],
		orderBy: "title",
		amount,
		value
	})

const performQuery: (input: {
	queries: any[]
	orderBy: string
	value: string | Promise<string>
	amount: number
}) => Promise<UserContentConfig[] | string> = async ({ queries, orderBy, value, amount }) => {
	let list: QuerySnapshot<DocumentData>

	value = await value

	try {
		list = await storeQuery({
			isTeam: false,
			amount,
			timestamp: orderBy,
			queries
		})
	} catch (e) {
		return e
	}

	return list.docs.map(convertDocToUserConfig)
}

const convertDocToUserConfig = (doc: QueryDocumentSnapshot<DocumentData>): UserContentConfig => {
	const data = doc.data()

	return {
		contentType: "user",
		id: data.id ?? doc.id,
		title: data.title?.trim(),
		caption: data.caption?.trim(),
		pronouns: data.pronouns,
		picture: `${import.meta.env.VITE_STORAGE_URL_PREFIX}${data.picture}`,
		private: data.private,
		verified: data.verified
	}
}

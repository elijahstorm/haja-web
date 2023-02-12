import { myId } from "$lib/firebase/auth"
import { pipe } from "$lib/utils"
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import {
	excludeResults,
	performQuery,
	recommendedQueriesAlgo,
	searchQueriesAlgo
} from "../Algos/searchAlgos"
import type { UserContentConfig } from "./UserContent"

export const getRecommendedUsers: (input: {
	id?: string
	exclude?: string[]
	amount?: number
}) => Promise<UserContentConfig[] | string> = ({ id = myId(), exclude = [], amount = 5 }) =>
	pipe(
		() =>
			performQuery({
				isTeam: false,
				queries: recommendedQueriesAlgo(id),
				orderBy: "updatedOn",
				amount,
				convertDocToConfig
			}),
		excludeResults(exclude, (config: UserContentConfig) => config.id)
	)

export const getUsersSearch: (input: {
	value: string
	exclude?: string[]
	amount?: number
}) => Promise<UserContentConfig[] | string> = ({ value, exclude = [], amount = 10 }) =>
	pipe(
		() =>
			performQuery({
				queries: searchQueriesAlgo(value),
				orderBy: "title",
				amount,
				convertDocToConfig
			}),
		excludeResults(exclude, (config: UserContentConfig) => config.id)
	)

const convertDocToConfig = (doc: QueryDocumentSnapshot<DocumentData>): UserContentConfig => {
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

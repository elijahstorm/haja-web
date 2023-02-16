import { myId } from "$lib/firebase/auth"
import { pipe } from "$lib/fp-ts"
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore"
import {
	excludeResults,
	performQuery,
	recommendedQueriesAlgo,
	searchQueriesAlgo
} from "../Algos/searchAlgos"
import type { TeamContentConfig } from "./TeamContent"

export const getRecommendedTeams: (input: {
	id?: string
	exclude?: string[]
	amount?: number
}) => Promise<TeamContentConfig[] | string> = ({ id = myId(), exclude = [], amount = 5 }) =>
	pipe(
		performQuery({
			isTeam: true,
			queries: [
				...recommendedQueriesAlgo(id),
				{
					type: "users",
					compare: "not-in",
					value: [[myId()]]
				}
			],
			orderBy: "users",
			amount,
			convertDocToConfig
		}),
		excludeResults(exclude, (config: TeamContentConfig) => config.id)
	)

export const getTeamsSearch: (input: {
	value: string
	exclude?: string[]
	amount?: number
}) => Promise<TeamContentConfig[] | string> = ({ value, exclude = [], amount = 10 }) =>
	pipe(
		performQuery({
			queries: searchQueriesAlgo(value),
			orderBy: "title",
			amount,
			convertDocToConfig
		}),
		excludeResults(exclude, (config: TeamContentConfig) => config.id)
	)

const convertDocToConfig = (doc: QueryDocumentSnapshot<DocumentData>): TeamContentConfig => {
	const data = doc.data()

	return {
		contentType: "team",
		id: data.id ?? doc.id,
		title: data.title?.trim(),
		caption: data.caption?.trim(),
		users: data.users,
		owner: data.owner,
		picture: `${import.meta.env.VITE_STORAGE_URL_PREFIX}${data.picture}`,
		private: data.private
	}
}

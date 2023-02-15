import { storeQuery, type FirestoreQuery } from "$lib/firebase/firestore"
import type { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from "firebase/firestore"

export const searchQueriesAlgo = (value: string) =>
	[
		{
			type: "private",
			compare: "==",
			value: false
		},
		{
			type: "title",
			compare: ">=",
			value
		},
		{
			type: "title",
			compare: "<",
			value: value + "z"
		}
	] as FirestoreQuery

export const recommendedQueriesAlgo = (id: string) =>
	[
		{
			type: "private",
			compare: "==",
			value: false
		}
	] as FirestoreQuery

export const performQuery: <Config>(input: {
	isTeam?: boolean
	queries: FirestoreQuery
	orderBy: string
	amount: number
	convertDocToConfig: (doc: QueryDocumentSnapshot<DocumentData>) => Config
}) => Promise<Config[] | string> = async ({
	isTeam = false,
	queries,
	orderBy,
	amount,
	convertDocToConfig
}) => {
	let list: QuerySnapshot<DocumentData>

	try {
		list = await storeQuery({
			isTeam,
			amount,
			timestamp: orderBy,
			queries
		})
	} catch (e) {
		return e
	}

	return list.docs.map(convertDocToConfig)
}

export const excludeResults =
	<Config>(exclude: string[], index: (config: Config) => string) =>
	(query: Promise<Config[]>) =>
		new Promise<Config[]>(async (resolve) => {
			const results = await query

			console.log(results)

			if (!results || typeof results === "string") return results

			resolve(results.filter((config) => exclude.indexOf(index(config)) === -1))
		})

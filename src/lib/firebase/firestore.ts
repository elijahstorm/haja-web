import "./firebase"
import {
	getFirestore,
	addDoc,
	collection,
	doc,
	DocumentReference,
	DocumentSnapshot,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	QuerySnapshot,
	serverTimestamp,
	setDoc,
	where,
	type DocumentData,
	type WhereFilterOp,
	deleteDoc,
	FieldPath
} from "firebase/firestore"
import type { SendContentConfig } from "$lib/Components/Content/Content"
import { firebaseApp } from "./firebase"
import { pipe } from "$lib/fp-ts"

export type FirestoreQuery = {
	type: string | FieldPath
	compare: WhereFilterOp
	value: unknown
}[]

const db = getFirestore(firebaseApp)

export const api: (data: StoreLocation) => string = ({
	source = null,
	isTeam = false,
	type = null,
	id = null
}) => {
	let api = isTeam ? "teams" : "users"

	if (source != null && type != null) {
		api += `/${source}/${type}`
	}

	if (id != null) {
		api += `/${id}`
	}

	return api
}

const connect = (store) => (api: string) => store(db, api)

const clense =
	(content, timestamp: string) =>
	(location = "") => {
		delete content.id
		delete content.contentType
		content[timestamp] = serverTimestamp()
		content["updatedOn"] = serverTimestamp()

		return {
			location,
			content
		}
	}

const upload =
	(protocol, options = null) =>
	(data) =>
		protocol(data.location, data.content, options)

export const getDocument: (data: StoreLocation) => Promise<DocumentSnapshot<DocumentData>> = ({
	source = null,
	isTeam = false,
	type = null,
	id
}) => pipe(api({ source, isTeam, type, id }), connect(doc), getDoc)

export const deleteDocument: (data: StoreLocation) => Promise<void> = ({
	source = null,
	isTeam = false,
	type = null,
	id
}) => pipe(api({ source, isTeam, type, id }), connect(doc), deleteDoc)

export const uploadDocument: (
	data: StoreLocation & {
		content: SendContentConfig
		timestamp?: string
	}
) => Promise<DocumentReference<DocumentData>> | Promise<void> = ({
	content,
	id = null,
	source = null,
	type = null,
	isTeam = false,
	timestamp = "createdOn"
}) =>
	id === null
		? addDoc(
				collection(db, api({ source, type, isTeam, id })),
				clense(content, timestamp)().content
		  )
		: setDoc(doc(db, api({ source, type, isTeam, id })), clense(content, timestamp)().content)

// pipe(
// 	api({ source, type, isTeam, id }),
// 	connect(id === null ? collection : doc),
// 	clense(content, timestamp),
// 	upload(id === null ? addDoc : setDoc)
// )

export const updateDocument: (
	data: StoreLocation & {
		content: SendContentConfig
		timestamp?: string
	}
) => Promise<void> = ({
	id,
	content,
	source = null,
	type = null,
	isTeam = false,
	timestamp = "updatedOn"
}) =>
	pipe(
		api({ source, type, isTeam, id }),
		connect(doc),
		clense(content, timestamp),
		upload(setDoc, { merge: true })
	)

export const storeQuery: (
	data: StoreLocation & {
		amount?: number
		timestamp?: string
		queries: FirestoreQuery
	}
) => Promise<QuerySnapshot<DocumentData>> = ({
	source = null,
	isTeam = false,
	type = null,
	amount = 50,
	timestamp = "updatedOn",
	queries
}) =>
	pipe(
		api({ source, isTeam, type }),
		connect(collection),
		(reference) =>
			query(
				reference,
				...queries.map((query) => where(query.type, query.compare, query.value)),
				orderBy(timestamp, "desc"),
				limit(amount)
			),
		getDocs
	)

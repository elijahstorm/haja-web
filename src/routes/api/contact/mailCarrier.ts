import { firebaseApp } from "$lib/firebase/firebase"
import { pipe } from "$lib/fp-ts"
import { split } from "$lib/utils"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import type { DocumentData, DocumentReference } from "firebase/firestore"

type DocumentResponse = Promise<DocumentReference<DocumentData>>

const OUR_EMAIL = import.meta.env.VITE_EMAIL_NAME

export const mailCarrier: (email: EmailConfiguration) => CarrierResponse<DocumentResponse> = ({
	type,
	email,
	subject,
	text,
	html
}) =>
	pipe(
		getMessageData({ subject, text, html }),
		split(toSender(email, type), toUs(type)),
		(mail) => mail.map((data) => addDoc(collection(getFirestore(firebaseApp), "mail"), data))
	) as CarrierResponse<DocumentResponse>

const getMessageData: PrepareMessageData =
	({ subject, text, html }) =>
	() => ({
		subject,
		text,
		html
	})

const toSender = (email: string, type: string) => (getData: MessageDataGetter) => ({
	to: email,
	type,
	message: getData()
})

const toUs = (type: string) => (getData: MessageDataGetter) => ({
	to: OUR_EMAIL,
	type,
	message: getData()
})

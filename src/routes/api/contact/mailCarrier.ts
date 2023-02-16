import { firebaseApp } from "$lib/firebase/firebase"
import { pipe } from "$lib/fp-ts"
import { split } from "$lib/utils"
import {
	addDoc,
	collection,
	DocumentReference,
	getFirestore,
	type DocumentData
} from "firebase/firestore"

const OUR_EMAIL = import.meta.env.VITE_EMAIL_NAME

type CarrierPayload = {
	type: string
	email: string
	subject: string
	message: string
}
type DocumentResponse = Promise<DocumentReference<DocumentData>>
type CarrierResponse = [DocumentResponse, DocumentResponse]
type MessageDataGetter = () => { subject: string; text: string; html: string }
type PrepareMessageData = (data: CarrierPayload) => MessageDataGetter

export const mailCarrier: (carrier: CarrierPayload) => CarrierResponse = ({
	type,
	email,
	subject,
	message
}) =>
	pipe(getMessageData({ type, email, subject, message }), split(toSender(email), toUs), (mail) =>
		mail.map((data) => addDoc(collection(getFirestore(firebaseApp), "mail"), data))
	) as CarrierResponse

const getMessageData: PrepareMessageData =
	({ type, email, subject, message }) =>
	() => ({
		subject,
		text: message,
		html: `${type} ${email}: ${message}`
	})

const toSender = (email: string) => (getData: MessageDataGetter) => ({
	to: email,
	message: getData()
})

const toUs = (getData: MessageDataGetter) => ({
	to: OUR_EMAIL,
	message: getData()
})

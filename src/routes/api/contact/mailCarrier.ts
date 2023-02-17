import { firebaseApp } from "$lib/firebase/firebase"
import { pipe } from "$lib/fp-ts"
import { split } from "$lib/utils"
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"

const OUR_EMAIL = import.meta.env.VITE_EMAIL_NAME

export const mailCarrier: (email: EmailConfiguration) => Promise<void>[] = ({
	type,
	ticket,
	email,
	subject,
	text,
	html
}) =>
	pipe(
		getMessageData({ subject, text, html }),
		split(toSender(email, type), toUs(type)),
		(mail) => mail.map((data) => setDoc(doc(getFirestore(firebaseApp), `mail/${ticket}`), data))
	)

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

export const prepareTicketId = () => addDoc(collection(getFirestore(firebaseApp), "mail"), {})

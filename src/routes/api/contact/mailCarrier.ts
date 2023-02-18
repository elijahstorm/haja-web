import { firebaseApp } from "$lib/firebase/firebase"
import { pipe } from "$lib/fp-ts"
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"

const OUR_EMAIL = import.meta.env.VITE_EMAIL_NAME

export const mailCarrier: (email: EmailConfiguration) => Promise<void> = ({
	type,
	ticket,
	email,
	subject,
	text,
	html
}) => pipe(getMessageData({ subject, text, html }), toSender(email, type), sendMail(ticket))

const getMessageData: PrepareMessageData =
	({ subject, text, html }) =>
	() => ({
		subject,
		text,
		html
	})

const toSender = (email: string, type: string) => (getData: MessageDataGetter) => ({
	to: [email, OUR_EMAIL],
	type,
	message: getData()
})

const sendMail = (ticket: string) => (data: { to: any[]; type: string; message: CarrierPayload }) =>
	setDoc(doc(getFirestore(firebaseApp), `mail/${ticket}`), data)

export const prepareTicketId = () => addDoc(collection(getFirestore(firebaseApp), "mail"), {})

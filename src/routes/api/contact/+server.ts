import { ErrorMessaging } from "$lib/firebase/errors"
import { error, json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { mailCarrier } from "./mailCarrier"

export const POST: RequestHandler = async ({ request }) => {
	const { type, email, subject, message } = await request.json()

	if (!email || !subject || !message) {
		throw error(400, "All fields must be supplied")
	}

	const date = new Date()
	const formattedDate = date.toDateString()

	try {
		const result = mailCarrier({ type, email, subject, message })

		const ticket = (await result[0]).id

		return json({
			ticket,
			date,
			email,
			message: `
				Message successfuly sent at ${formattedDate}.
				Your ticket ID is #${ticket}.
				Check your emails for a confirmation message.
				We will respond as soon as possible.
			`
		})
	} catch (e) {
		throw error(504, {
			message: ErrorMessaging(e.code)
		})
	}
}

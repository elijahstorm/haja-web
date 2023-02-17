import { base } from "$app/paths"
import { awaitMyId, loginWithInfo, signOut } from "$lib/firebase/auth"
import { ErrorMessaging } from "$lib/firebase/errors"
import { error, json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { mailCarrier, prepareTicketId } from "./mailCarrier"
import { clense, mailGenerator } from "./mailGenerator"

export const POST: RequestHandler = async ({ fetch, request }) => {
	const { type, email, subject, message } = await request.json()

	if (!email || !subject || !message) {
		throw error(400, "All fields must be supplied")
	}

	await loginWithInfo("elijahstormai@gmail.com", "tester")

	const date = new Date()
	const formattedDate = date.toDateString()

	const ticket = (await prepareTicketId()).id

	const render = await (await fetch(`${base}/emails/contact-confirmation.html`)).text()

	const text = clense(message)
	const html = await mailGenerator(render, {
		ticket,
		type,
		email,
		subject,
		text,
		date: formattedDate
	})

	try {
		const result = mailCarrier({ ticket, type, email, subject, text, html })

		await result[0]
		await result[1]

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

import { base } from "$app/paths"
import { loginWithInfo } from "$lib/firebase/auth"
import { ErrorMessaging } from "$lib/firebase/errors"
import { error, json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"
import { mailCarrier, prepareTicketId } from "./mailCarrier"
import { clense, mailGenerator } from "./mailGenerator"

export const POST: RequestHandler = async ({ fetch, request }) => {
	const { type, email, subject, message } = await request.json()
	const date = new Date()
	const formattedDate = date.toDateString()
	const text = clense(message)

	if (!email || !subject || !message) {
		throw error(400, "All fields must be supplied")
	}

	try {
		await loginWithInfo("elijahstormai@gmail.com", "tester")

		const dataFetch = await Promise.all([
			prepareTicketId(),
			fetch(`${base}/emails/contact-confirmation.html`)
		])

		const ticket = dataFetch[0].id
		const renderHTML = await dataFetch[1].text()

		const html = mailGenerator(renderHTML, {
			ticket,
			type,
			email,
			subject,
			text,
			date: formattedDate
		})

		await mailCarrier({ ticket, type, email, subject, text, html })

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

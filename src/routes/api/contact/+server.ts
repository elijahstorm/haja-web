import { error, json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async ({ request }) => {
	const { email, subject, message } = await request.json()

	if (!email || !subject || !message) {
		throw error(400, "All fields must be supplied")
	}

	const date = new Date()
	const formattedDate = date.toDateString()

	// TODO:
	// send to us and send back confirmation email
	const ticket = 100

	return json({
		ticket,
		date,
		email,
		message: `Message successfuly sent at ${formattedDate}. Your ticket number is #${ticket}. Check your emails for a confirmation message and we will respond as soon as possible.`
	})
}

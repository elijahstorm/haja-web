import { base } from "$app/paths"

export const mailGenerator = async (html: string, email: EmailHTMLGenerator) =>
	replaceables(email).reduce(
		(html, replaceable) => html.replaceAll(replaceable.search, replaceable.replace),
		html
	)

const replaceables = (email: EmailHTMLGenerator) =>
	[
		{
			search: "$HOME_URL_TEXT",
			replace: "Haja"
		},
		{
			search: "$HOME_URL_HREF",
			replace: base
		},
		{
			search: "$LOGO_FULL_COLOR",
			replace: `${base}/images/haja/logo_horizontal_2 color.png`
		},
		{
			search: "$LOGO_SMALL_COLOR",
			replace: `${base}/images/haja/logo_2 color.png`
		},
		{
			search: "$WHITE_LOGO_IMAGE",
			replace: `${base}/images/haja/logo_horizontal_white.png`
		},
		{
			search: "$IMAGE_CALENDAR",
			replace: `${base}/emails/images/desktop.png`
		},
		{
			search: "$IMAGE_WORKSPACE",
			replace: `${base}/emails/images/calendar.png`
		},
		{
			search: "$SUPPORT_TYPE",
			replace: email.type
		},
		{
			search: "$DATE_RECIEVED",
			replace: email.date
		},
		{
			search: "$SENDER_EMAIL",
			replace: email.email
		},
		{
			search: "$MESSAGE_SUBJECT",
			replace: email.subject
		},
		{
			search: "$SENT_MESSAGE",
			replace: email.text
		},
		{
			search: "$VIEW_EMAIL_HREF",
			replace: `${base}/contact/${email.ticket}/view`
		},
		{
			search: "$ISSUE_URL_HREF",
			replace: `${base}/contact/${email.ticket}`
		},
		{
			search: "$ISSUE_ID",
			replace: email.ticket
		}
	] as { search: string; replace: string }[]

export const clense = (message: string) => message

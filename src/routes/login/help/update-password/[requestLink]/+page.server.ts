import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
	let error: string | null = null

	const { requestLink } = params
	let validation: string = ""

	return { validation, error, requestLink }
}

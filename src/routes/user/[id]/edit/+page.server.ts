import type { PageServerLoad } from "./$types"
import { getUser } from "$lib/Components/Content/User/UserContent"

export const load: PageServerLoad = async ({ params }) => {
	let error: string | null = null

	let user = await getUser({
		id: params.id
	})

	if (typeof user === "string") {
		error = user
		user = null
	}

	return { user, error }
}

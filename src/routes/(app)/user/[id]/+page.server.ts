import type { PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { getUser } from "$lib/Components/Content/User/UserContent"
import { pipe } from "$lib/fp-ts"

export const load: PageServerLoad = async ({ params }) => {
	const prefilteredData = await getUser({
		id: params.id
	})

	let user = pipe(() => prefilteredData, JSON.stringify, JSON.parse)

	if (typeof user === "string") {
		throw error(404, "user not found")
	}

	return { user }
}

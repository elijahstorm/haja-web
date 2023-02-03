import type { PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { getUser } from "$lib/Content/User/UserContent"
import { pipe } from "$lib/utils"

export const load: PageServerLoad = async ({ params }) => {
	const prefilteredData = await getUser({
		id: params.id
	})

	let user = pipe(() => prefilteredData, JSON.stringify, JSON.parse)

	if (typeof user === "string") {
		throw error(404, "todo not found")
	}

	return { user }
}

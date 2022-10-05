import type { PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { getTeam } from "$lib/content/team/TeamContent"
import { pipe } from "$lib/utils"

export const load: PageServerLoad = async ({ params }) => {
	const prefilteredData = await getTeam({
		id: params.id
	})

	let team = pipe(() => prefilteredData, JSON.stringify, JSON.parse)

	if (typeof team === "string") {
		throw error(404, "todo not found")
	}

	return { team }
}

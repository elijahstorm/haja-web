import type { PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { getTeam } from "$lib/Components/Content/Team/TeamContent"
import { pipe } from "$lib/fp-ts"

export const load: PageServerLoad = async ({ params }) => {
	const prefilteredData = await getTeam({
		id: params.id
	})

	console.log(prefilteredData)

	let team = pipe(prefilteredData, JSON.stringify, JSON.parse)

	if (typeof team === "string") {
		throw error(404, "team not found")
	}

	return { team }
}

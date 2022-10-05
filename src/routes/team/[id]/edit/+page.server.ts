import type { PageServerLoad } from "./$types"
import { getTeam } from "$lib/content/team/TeamContent"

export const load: PageServerLoad = async ({ params }) => {
	let error: string | null = null

	let team = await getTeam({
		id: params.id
	})

	if (typeof team === "string") {
		error = team
		team = null
	}

	return { team, error }
}

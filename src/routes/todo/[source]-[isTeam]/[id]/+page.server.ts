import type { PageServerLoad } from "./$types"
import { error } from "@sveltejs/kit"
import { getTodo } from "$lib/Components/Content/Todo/TodoContent"
import { pipe } from "$lib/utils"

export const load: PageServerLoad = async ({ params }) => {
	const { id, source } = params
	const isTeam = params.isTeam === "1"

	const prefilteredData = await getTodo({
		source,
		isTeam,
		id
	})

	let todo = pipe(() => prefilteredData, JSON.stringify, JSON.parse)

	if (typeof todo === "string") {
		throw error(404, "todo not found")
	}

	return { todo, source, isTeam }
}

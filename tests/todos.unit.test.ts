import { describe, it, expect, afterEach } from "vitest"
import { cleanup, fireEvent, render } from "@testing-library/svelte"
import TodoList from "$lib/Components/Content/Todo/TodoList.svelte"
import type { TodoContentConfig } from "$lib/Components/Content/Todo/TodoContent"

describe("TodoList.svelte", () => {
	afterEach(() => cleanup())

	const source = "source"
	const todos: TodoContentConfig[] = [
		{
			id: "1",
			contentType: "todo",
			date: new Date(),
			title: "title 1",
			caption: "caption 1",
		},
		{
			id: "2",
			contentType: "todo",
			date: new Date(),
			title: "title 2",
			caption: "caption 2",
		},
	]

	it("can add more if unlocked", () => {
		const { container } = render(TodoList, { todos, source, isTeam: false, locked: false })
		expect(container).toBeTruthy()
		expect(container.innerHTML).toContain("Add a new todo")
		expect(container.innerHTML).toContain("title 1")
		expect(container.innerHTML).toContain("caption 2")
	})

	it("cannot add more if locked", () => {
		const { container } = render(TodoList, { todos, source, isTeam: false, locked: true })
		expect(container).toBeTruthy()
		expect(container.innerHTML).not.toContain("Add a new todo")
		expect(container.innerHTML).toContain("title 1")
		expect(container.innerHTML).toContain("caption 2")
	})

	it("shows empty todo list", () => {
		const { container } = render(TodoList, { todos: [], source, isTeam: false, locked: true })
		expect(container).toBeTruthy()
		expect(container.innerHTML).toContain("No todos")
	})

	it("can add more if unlocked", async () => {
		const { container } = render(TodoList, { todos, source, isTeam: false, locked: false })
		expect(container).toBeTruthy()
		expect(container.innerHTML).toContain("Add a new todo")
		await fireEvent.click(container.querySelector('[data-test-type="add"]'))
		expect(container.innerHTML).toContain("Let's do Together!")
	})
})

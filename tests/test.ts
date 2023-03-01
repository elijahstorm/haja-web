import { expect, test } from "@playwright/test"

const location = "http://localhost:3000"
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

test("should load landing page", async ({ page }) => {
	await page.goto(location)

	await expect(page.locator("h1")).toHaveText("Let's accomplish it together")

	// Click the login link.
	await page.getByRole("link", { name: "Get Started" }).click()

	// Expects the URL to contain login.
	await expect(page).toHaveURL(/.*signup/)

	// also test if the user can login
	await page.goto(location)

	// Click the login link.
	await page.getByRole("link", { name: "Login" }).first().click()

	// Expects the URL to contain login.
	await expect(page).toHaveURL(/.*login/)
})

test("should allow to contact us", async ({ page }) => {
	await page.goto(location)

	const testForm = async (name: string, url: RegExp) => {
		// would love to remove this, but footer elements are hydrated on svelte after reload.
		// so playwright does not automatically wait for full hydration
		await delay(2000)

		await page.getByRole("link", { name }).click()

		await expect(page).toHaveURL(url)

		await expect(page.locator("input[type=email][required]")).toBeVisible()
		await expect(page.locator("textarea[required]")).toBeVisible()
		await expect(page.getByRole("button", { name: "Send message" })).toBeVisible()
	}

	testForm("Contact Us", /.*contact/)
	testForm("Support", /.*support/)
})

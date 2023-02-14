import { expect, test } from "@playwright/test"

const location = "http://localhost:3000"

test("should allow link to make new account", async ({ page }) => {
	await page.goto(location)
	await expect(page.locator("h1")).toHaveText("Let's accomplish it together")
})

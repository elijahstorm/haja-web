import { expect, test } from "@playwright/test"

test("should allow link to make new account", async ({ page }) => {
	await page.goto("/team")
	await expect(page.locator("span")).toHaveText("New to Haja?")
})

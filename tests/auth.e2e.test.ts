import { expect, test } from "@playwright/test"

const location = "http://localhost:4173"

test("should allow link to make new account", async ({ page }) => {
	await page.goto(location)
	await expect(page.locator("h1")).toHaveText("Let's accomplish it together")
	await page.locator('a[href="/login"]').first().click()
	await expect(page.getByText("New to Haja?")).toBeInViewport()
	await page.getByText("Sign up").click()
	await expect(page.getByPlaceholder("Email")).toBeInViewport()
	await expect(page.getByPlaceholder("Confirm Password")).toBeInViewport()
	await expect(page.locator("button").getByText("Signup")).toBeVisible()
})

test("view my account if logged in", async ({ page }) => {
	await page.goto(location)
	await page.locator('a[href="/login"]').first().click()
	await expect(page.getByPlaceholder("Email")).toBeInViewport()
	await expect(page.getByPlaceholder("Password")).toBeInViewport()
	await page.getByPlaceholder("Email").fill("elijahstormai@gmail.com")
	await page.getByPlaceholder("Password").fill("tester")
	await page.locator('button[type="submit"]').click()
	await expect(page.locator("button").first()).toHaveText("Logout")
})

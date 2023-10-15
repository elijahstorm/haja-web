import type { PlaywrightTestConfig } from "@playwright/test"
import { devices } from "@playwright/test"

const config: PlaywrightTestConfig = {
	webServer: {
		command: "pnpm run build && pnpm run preview",
		port: 4173,
	},
	testDir: "tests",
	testMatch: /(.+\.)?.e2e.(test|spec)\.[jt]s/,
	timeout: 30 * 1000,
	expect: {
		timeout: 5000,
	},
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	use: {
		baseURL: "http://localhost:3000",
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
			},
		},

		{
			name: "firefox",
			use: {
				...devices["Desktop Firefox"],
			},
		},

		{
			name: "webkit",
			use: {
				...devices["Desktop Safari"],
			},
		},

		/* Test against mobile viewports. */
		{
			name: "Mobile Chrome",
			use: {
				...devices["Pixel 5"],
			},
		},
		{
			name: "Mobile Safari",
			use: {
				...devices["iPhone 12"],
			},
		},

		/* Test against branded browsers. */
		{
			name: "Google Chrome",
			use: {
				channel: "chrome",
			},
		},
	],
	outputDir: "test-results/",
}

export default config

import type { PlaywrightTestConfig } from "@playwright/test"

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
	outputDir: "test-results/",
}

export default config

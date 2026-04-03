import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3103',
    headless: true,
  },
  webServer: {
    command: 'npx next start -p 3103',
    port: 3103,
    timeout: 30000,
    reuseExistingServer: true,
    env: {
      NODE_TLS_REJECT_UNAUTHORIZED: '0',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
})

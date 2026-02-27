// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 80 * 1000,

  expect: {
    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    headless: true,
    // screenshot: 'on',
    // // trace : 'on', 
    // trace: 'retain-on-failure',

    // }
  //   // All requests we send go to this API endpoint.
  //   baseURL: 'https://api.github.com',
  //   extraHTTPHeaders: {
  //     // We set this header per GitHub guidelines.
  //     'Accept': 'application/vnd.github.v3+json',
  //     // Add authorization token to all requests.
  //     // Assuming personal access token available in the environment.
  //     'Authorization': `token ${process.env.API_TOKEN}`,
  //   }
  // }
  },
});


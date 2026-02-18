// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'node:process';
import { use } from 'react';

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
  timeout: 50 * 1000,
  retries: 1,

  expect: {
    timeout: 5000
  },

  reporter: 'html',
  projects: [
    { name: 'chrome execution',
        use: {
    browserName: 'chromium',
    headless: true,
    // screenshot: 'on',
    // // trace : 'on', 
    ...devices['iPhone 12 Pro Max'],
    video: 'on',
    // trace: 'retain-on-failure',

  }
    },
      { name: 'firefox execution',
        use: {
    browserName: 'firefox',
    headless: true,
    // screenshot: 'on',
    // // trace : 'on', 
    // trace: 'retain-on-failure',

  }
      }
  ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

});


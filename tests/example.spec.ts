import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  test.fail()
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Cypress/);
});

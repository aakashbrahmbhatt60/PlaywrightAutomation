import { test } from '@playwright/test';

test('Open Practice Test Automation website', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.waitForTimeout(7000);
});
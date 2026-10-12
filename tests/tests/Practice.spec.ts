 import { test, expect } from '@playwright/test';

   test('Practice Page', async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice/');

      //  await page.getByLabel('Username').fill('wronguser');
      //  await page.getByLabel('Password').fill('Password12345');

        await page.getByRole('link', { name: 'Test Login Page' }).click();

        await expect(page).toHaveURL(
    'https://practicetestautomation.com/practice-test-login/'
);
        // Example - verify error message
       // await expect(page.getByText(/Your username is invalid/i)).toBeVisible();


    });
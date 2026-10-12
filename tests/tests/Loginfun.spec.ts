import { test, expect, Page } from '@playwright/test';

async function login(page: Page, username: string, password: string) {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.getByLabel('Username').fill(username);

    await page.getByLabel('Password').fill(password);

    await page.getByRole('button', { name: 'Submit' }).click();
}

test('Login Test', async ({ page }) => {

    await login(page, 'student', 'Password123');

});
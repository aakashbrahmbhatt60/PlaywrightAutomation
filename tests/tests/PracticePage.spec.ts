import { test, expect } from '@playwright/test';
import { PracticePage } from '../Pages/PracticePage';


test('Practice Page Link Click', async ({ page }) => 
    {
    await page.goto('https://practicetestautomation.com/practice/');

    const pract = new PracticePage(page);

    await page.getByRole('link', { name: 'Test Exceptions' }).click();
});
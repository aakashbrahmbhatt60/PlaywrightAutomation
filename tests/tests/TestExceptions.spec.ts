import { test } from '@playwright/test';
import { TestExceptionsOne } from '../Pages/TestExceptions';


test('Add', async ({ page }) => {

        console.log('Row 1 count:', await page.getByLabel('Row 1').count());

    const ts = new TestExceptionsOne(page);

    await page.goto('https://practicetestautomation.com/practice-test-exceptions/');

        await ts.testexception('Burger');
        await page.getByRole('button', { name: 'Add' }).click();
    }
);

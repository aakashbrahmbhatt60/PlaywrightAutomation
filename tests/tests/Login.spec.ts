import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';


test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('student', 'Password123');

    await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );
});


   test('Invalid username and valid password', async ({ page }) => {

        const loginPage = new LoginPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('studentess', 'Password123');

   /* await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );*/
    
    });

    
   test('Valid username and Invalid password', async ({ page }) => {

       const loginPage = new LoginPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('student', 'Password12345');

 /* await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );*/

   
    });

    
   test('Blank field', async ({ page }) => {

        const loginPage = new LoginPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('', '');

   /* await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );*/
       
    });

    
   test('Invalid username and Invalid password', async ({ page }) => {

     const loginPage = new LoginPage(page);

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await loginPage.login('studentess', 'Password1234');

   /* await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );*/

    
    });
import { Page, Locator } from '@playwright/test';

export class LoginPage {

    private username: Locator;
    private password: Locator;
    private submitButton: Locator;

    constructor(private page: Page) {
        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async login(username: string, password: string) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.submitButton.click();
    }
}
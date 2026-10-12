import { Page, Locator } from '@playwright/test';

export class TestExceptionsOne {

    private row1: Locator;

    constructor(private page: Page) {
        this.row1 = page.locator('#row_input');
    }

    async testexception(rowdata: string) 
    {
        await this.row1.fill(rowdata);
console.log('Row 1 count:', await this.row1.count());

    }

}


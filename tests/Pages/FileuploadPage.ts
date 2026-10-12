
import { Page, Locator, expect } from '@playwright/test';

export class FileUploadPages {
    readonly page: Page;
    readonly fileInput: Locator;
    readonly upload: Locator;
    //readonly successMessage: Locator;
    readonly uploadedFileName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fileInput = page.locator('#file-upload');
        this.upload = page.locator('#file-submit');

       /* this.successMessage = page.getByRole('heading', {
            name: 'File Uploaded!'
        });
*/
        this.uploadedFileName = page.locator('sample.pdf');
    }

 async openUploadPage(): Promise<void> {
    await this.page.goto(
        'https://the-internet.herokuapp.com/upload',
         {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        }
     
    );
}

    async dragAndDropFile(filePath: string): Promise<void> {
        await this.fileInput.setInputFiles(filePath);

        await this.upload.click();
    }

    async verifyUploadSuccess(fileName: string): Promise<void> {
       //await expect(this.successMessage).toBeVisible();

        await expect(this.uploadedFileName).toHaveText(fileName);
    }
}

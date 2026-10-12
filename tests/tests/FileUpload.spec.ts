
import { test } from '@playwright/test';
import { FileUploadPages } from '../Pages/FileuploadPage';
import path from 'node:path';

test('Verify PDF file uploads successfully using file upload area', async ({ page }) => {
    const fileUpload = new FileUploadPages(page);

    const filePath = path.resolve('testdata/sample.pdf');
    const fileName = 'sample.pdf';

    await fileUpload.openUploadPage();

    await fileUpload.dragAndDropFile(filePath);

    await fileUpload.verifyUploadSuccess(fileName);
});

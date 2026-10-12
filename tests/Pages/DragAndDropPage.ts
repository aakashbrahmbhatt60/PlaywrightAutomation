
import { Page, Locator, expect } from '@playwright/test';

export class DragAndDropPage {
    readonly page: Page;
    readonly boxA: Locator;
    readonly boxB: Locator;

   
constructor(page: Page) {
    this.page = page;

    this.boxA = page.locator('#column-a');
    this.boxB = page.locator('#column-b');
}


   
async openDragAndDropPage(): Promise<void> {
    await this.page.goto(
        'https://the-internet.herokuapp.com/drag_and_drop',
        { waitUntil: 'domcontentloaded', timeout: 3000 }
    );

    await expect(this.boxA).toBeVisible();
    await expect(this.boxB).toBeVisible();
}

    async switchPositionsUsingOffset(): Promise<void> {
        // Dispatch HTML5 drag-and-drop events in the browser.

        await this.boxA.dragTo(this.boxB, {
        timeout: 10000
    });
        await this.page.evaluate(() => {
            const source = document.querySelector('A');
            const target = document.querySelector('B');

            if (!source || !target) {
                throw new Error('Could not find boxes A and B');
            }

            const dataTransfer = new DataTransfer();

            source.dispatchEvent(new DragEvent('dragstart', {
                bubbles: true,
                cancelable: true,
                dataTransfer
            }));

            target.dispatchEvent(new DragEvent('dragenter', {
                bubbles: true,
                cancelable: true,
                dataTransfer
            }));

            target.dispatchEvent(new DragEvent('dragover', {
                bubbles: true,
                cancelable: true,
                dataTransfer
            }));

            target.dispatchEvent(new DragEvent('drop', {
                bubbles: true,
                cancelable: true,
                dataTransfer
            }));

            source.dispatchEvent(new DragEvent('dragend', {
                bubbles: true,
                cancelable: true,
                dataTransfer
            }));
        });

        await expect(this.boxA).toHaveText('B');
        await expect(this.boxB).toHaveText('A');
    }
}

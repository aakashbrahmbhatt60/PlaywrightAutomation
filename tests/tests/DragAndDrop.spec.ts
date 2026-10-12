
import { test } from '@playwright/test';
import { DragAndDropPage } from '../Pages/DragAndDropPage';

test('Switch the position of A and B using drag and drop', async ({ page }) => {
    const dragAndDrop = new DragAndDropPage(page);

    await dragAndDrop.openDragAndDropPage();
    await dragAndDrop.switchPositionsUsingOffset();
});

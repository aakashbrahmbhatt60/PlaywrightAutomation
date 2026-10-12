import { Page, Locator } from '@playwright/test';

export class PracticePage{
private testexe: Locator;
    

constructor(private page: Page)
{
    
    this.testexe= page.getByRole('link', { name: 'Test Exceptions' })
}

 async practicepage()
{
    await this.testexe.click();
 }
}
import { Page, Locator } from '@playwright/test';

export default class CoursesOne {

    private coursesLink: Locator;

    constructor(private page: Page) {
        this.coursesLink = this.page.getByRole('link', {
            name: 'Courses'
        });
    }

    async clickCourses() {
        await this.coursesLink.click();
    }
}

export class CourseslinkOne {

    private seleniumCourse: Locator;

    constructor(private page: Page) {
        this.seleniumCourse = this.page.getByRole('link', {
            name: 'Selenium WebDriver with Java: AI-Powered Test Automation'
        });
    }

    async clickSeleniumCourse() {
        await this.seleniumCourse.click();
    }
}
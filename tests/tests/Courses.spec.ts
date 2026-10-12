import { test, expect } from '@playwright/test';
import CoursesOne, { CourseslinkOne } from '../Pages/Courses';

test('Courses test', async ({ page }) => {

    await page.goto('https://practicetestautomation.com/courses/');

    const courses = new CoursesOne(page);
    const courseLink = new CourseslinkOne(page);

    await courses.clickCourses();

    await courseLink.clickSeleniumCourse();
});
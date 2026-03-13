Here is the complete Playwright test script in TypeScript to validate the React application:
```
import { chromium } from 'playwright';
import { App } from './App'; // assuming App.js is in the same directory

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Test 1: Page loads successfully
  await page.goto('http://localhost:3000'); // adjust the URL if needed
  await page.waitForLoadState('networkidle0');

  // Test 2: 'Hello World' text is present
  await page.waitForSelector('.hero h1');
  const helloWorldText = await page.textContent('.hero h1');
  expect(helloWorldText).toBe('Hello World!');

  // Test 3: Basic styling (background color) is correct
  await page.waitForSelector('.hero');
  const backgroundColor = await page.evaluate(() => {
    return getComputedStyle(document.querySelector('.hero')).backgroundColor;
  });
  expect(backgroundColor).toBe('rgb(220, 220, 220)'); // adjust the expected color if needed

  // Test 4: Mode toggle button is present
  await page.waitForSelector('.content button');
  const modeToggleButton = await page.textContent('.content button');
  expect(modeToggleButton).toBe('Get Started');

  // Test 5: Mode toggle button works
  await page.click('.content button');
  await page.waitForTimeout(1000); // wait for the mode to toggle
  await page.waitForSelector('.hero h1');
  const newHelloWorldText = await page.textContent('.hero h1');
  expect(newHelloWorldText).toBe('Hello World!'); // or adjust the expected text if needed

  await browser.close();
})();
```
This script uses Playwright to launch a browser, navigate to the React application, and perform a series of tests to validate the application's functionality and UI elements. The tests cover the following:

1. Page loads successfully
2. 'Hello World' text is present
3. Basic styling (background color) is correct
4. Mode toggle button is present
5. Mode toggle button works

Note that you may need to adjust the URL in the `page.goto` call to match your local development environment. Additionally, you can modify the expected results in the tests to match your specific requirements.
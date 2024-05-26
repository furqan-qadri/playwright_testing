import { test, expect } from "@playwright/test";

// Define the test
test("should display headings and show alert when button is clicked", async ({
  page,
}) => {
  // Navigate to the page
  await page.goto("http://localhost:3000"); // Adjust URL if needed

  // Assert the headings are displayed
  const h1 = await page.locator("h1").innerText();
  const h2 = await page.locator("h2").innerText();
  const h3 = await page.locator("h3").innerText();

  expect(h1).toBe("Hello");
  
  expect(h2).toBe("My Name");
  expect(h3).toBe("Furqan");
});

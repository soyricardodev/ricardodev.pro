import { test, expect } from '@playwright/test';

test('meta is correct', async ({ page }) => {
  await page.goto("http://localhost:4321/");

  await expect(page).toHaveTitle('Porfolio de midudev - Desarrollador y Programador Web con 15 años de experiencia');
});
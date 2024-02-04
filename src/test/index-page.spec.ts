import { test, expect } from "@playwright/test";
import SEO_DEFAULTS from "@/constants/seo";

test("meta is correct", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(SEO_DEFAULTS.title);
});

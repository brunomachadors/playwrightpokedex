const { test, expect } = require('@playwright/test');

test('Select Pokémon Gengar', async ({ page }) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');

  await expect(page.getByLabel('POKÉMON Button')).toBeVisible();
  await page.getByLabel('POKÉMON Button').click();
  await expect(page.getByLabel('Select Pokemon')).toBeVisible();
  await expect(
    page.getByLabel('Pokedex Landscape Container').locator('div').nth(2)
  ).toBeVisible();
  await expect(page.getByLabel('TYPES Button')).toBeVisible();
  await expect(page.getByLabel('ITEMS Button')).toBeVisible();
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
  await expect(
    page.getByLabel('Select the pokemon gengar').first()
  ).toBeVisible();

  await page.getByLabel('Select the pokemon gengar', { exact: true }).click();

  await page.getByLabel('Switch to Photo').click();
});

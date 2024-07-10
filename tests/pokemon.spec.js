const { test, expect } = require('@playwright/test');

test.skip('Select Pokémon Bulbassaur', async ({ page }) => {
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
  
  await page.getByLabel('Select the pokemon bulbasaur').click();
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of bulbasaur')).toBeVisible();
  
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('#1 BULBASAUR')).toBeVisible();
  await expect(page.getByText('GRASS')).toBeVisible();
  await expect(page.getByText('POISON')).toBeVisible();
  await expect(page.getByText('A strange seed was planted on')).toBeVisible();
  await expect(page.getByText('A strange')).toHaveText('A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.');
});


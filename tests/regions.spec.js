const { test, expect } = require('@playwright/test');

test('Select Pokémon Bulbassaur', async ({ page }) => {
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  //1 KANTO
  await page.getByLabel('Select the region kanto').click(); 
  await expect(page.getByLabel('Open image of kanto region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('YELLOW')).toBeVisible();
  //2 JOHTO
  await page.getByLabel('Select the region johto').click(); 
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('CRYSTAL')).toBeVisible();
  await (page.getByLabel('Switch to Photo')).click();
  await expect(page.getByLabel('Open image of johto region')).toBeVisible(); 
  //3 HOENN
  await page.getByLabel('Select the region hoenn').click(); 
  await expect(page.getByLabel('Open image of hoenn region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('EMERALD')).toBeVisible();
  //4 SINNOH
  await page.getByLabel('Select the region sinnoh').click(); 
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('PLATINUM')).toBeVisible();
  await (page.getByLabel('Switch to Photo')).click();
  await expect(page.getByLabel('Open image of sinnoh region')).toBeVisible(); 
  //5 UNOVA
  await page.getByLabel('Select the region unova').click(); 
  await expect(page.getByLabel('Open image of unova region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('BLACK-WHITE')).toBeVisible();
  //6 KALOS
  await page.getByLabel('Select the region kalos').click(); 
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('X-Y')).toBeVisible();
  await (page.getByLabel('Switch to Photo')).click();
  await expect(page.getByLabel('Open image of kalos region')).toBeVisible(); 
  //7 ALOLA
  await page.getByLabel('Select the region alola').click(); 
  await expect(page.getByLabel('Open image of alola region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('SUN-MOON')).toBeVisible();
  //8 GALAR
  await page.getByLabel('Select the region galar').click(); 
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('SWORD-SHIELD')).toBeVisible();
  await (page.getByLabel('Switch to Photo')).click();
  await expect(page.getByLabel('Open image of galar region')).toBeVisible(); 
  //9 HISUI
  await page.getByLabel('Select the region hisui').click(); 
  await expect(page.getByLabel('Open image of hisui region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('LEGENDS-ARCEUS')).toBeVisible();
  //10 PALDEA
  await page.getByLabel('Select the region paldea').click(); 
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('SCARLET-VIOLET')).toBeVisible();
  await (page.getByLabel('Switch to Photo')).click();
  await expect(page.getByLabel('Open image of paldea region')).toBeVisible();
});
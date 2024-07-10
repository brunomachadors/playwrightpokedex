const { test, expect } = require('@playwright/test');

test('Validate Kanto Region', async ({ page }) => {
  //1 Kanto
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region kanto').click(); 
  await expect(page.getByLabel('Open image of kanto region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('YELLOW')).toBeVisible(); });
  
  test('Validate Johto Region', async ({ page }) => {
  //2 JOHTO
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region johto').click(); 
  await expect(page.getByLabel('Open image of johto region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('CRYSTAL')).toBeVisible(); });
 
  test('Validate Hoenn Region', async ({ page }) => {
  //3 HOENN
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region hoenn').click(); 
  await expect(page.getByLabel('Open image of hoenn region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('EMERALD')).toBeVisible(); });
 
  test('Validate Sinnoh Region', async ({ page }) => {
  //4 SINNOH
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region sinnoh').click(); 
  await expect(page.getByLabel('Open image of sinnoh region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('PLATINUM')).toBeVisible(); });

  test('Validate Unova Region', async ({ page }) => {
  //5 UNOVA
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region unova').click(); 
  await expect(page.getByLabel('Open image of unova region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('BLACK-WHITE')).toBeVisible(); });
  
  test('Validate Kalos Region', async ({ page }) => {
  //6 KALOS
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region kalos').click(); 
  await expect(page.getByLabel('Open image of kalos region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('X-Y')).toBeVisible(); });
 
  test('Validate Alola Region', async ({ page }) => {
  //7 ALOLA
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region alola').click(); 
  await expect(page.getByLabel('Open image of alola region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('SUN-MOON')).toBeVisible(); });
 
  test('Validate Galar Region', async ({ page }) => {
  //8 GALAR
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region galar').click(); 
  await expect(page.getByLabel('Open image of galar region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('SWORD-SHIELD')).toBeVisible(); });
  
  test('Validate Hisui Region', async ({ page }) => {
  //9 HISUI
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region hisui').click(); 
  await expect(page.getByLabel('Open image of hisui region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('LEGENDS-ARCEUS')).toBeVisible(); });
 
  test('Validate Paldea Region', async ({ page }) => {
  //10 PALDEA
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('REGIONS Button')).toBeVisible();
  await page.getByLabel('REGIONS Button').click();
  await expect(page.getByLabel('REGION list')).toBeVisible(); 
  await page.getByLabel('Select the region paldea').click(); 
  await expect(page.getByLabel('Open image of paldea region')).toBeVisible();
  await (page.getByLabel('Switch to Info')).click();
  await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
  await expect(page.getByText('SCARLET-VIOLET')).toBeVisible();

});



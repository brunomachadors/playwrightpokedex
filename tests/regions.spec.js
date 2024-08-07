const { test, expect } = require('@playwright/test');

test.describe('Validate Regions', () => {
  // Define a setup que será compartilhada por todos os testes
  test.beforeEach('Load Pokedex and clicks region button', async ({ page }) => {
    await page.goto('https://brunomachadors.github.io/pokedex/');
    await expect(page.getByLabel('REGIONS Button')).toBeVisible();
    await page.getByLabel('REGIONS Button').click();
    await expect(page.getByLabel('REGION list')).toBeVisible();
  });

  // Teste para Kanto
  test('Validate Kanto Region', async ({ page }) => {
    await test.step('Select Kanto region', async () => {
      await page.getByLabel('Select the region kanto').click();
      await expect(page.getByLabel('Open image of kanto region')).toBeVisible();
    });

    await test.step('Validate Kanto Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('YELLOW')).toBeVisible();
    });
  });

  // Teste para Johto
  test('Validate Johto Region', async ({ page }) => {
    await test.step('Select Johto region', async () => {
      await page.getByLabel('Select the region johto').click();
      await expect(page.getByLabel('Open image of johto region')).toBeVisible();
    });

    await test.step('Validate Johto Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('CRYSTAL')).toBeVisible();
    });
  });

  // Teste para Hoenn
  test('Validate Hoenn Region', async ({ page }) => {
    await test.step('Select Hoenn Region', async () => {
      await page.getByLabel('Select the region hoenn').click();
      await expect(page.getByLabel('Open image of hoenn region')).toBeVisible();
    });

    await test.step('Validate Hoenn Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('EMERALD')).toBeVisible();
    });
  });

  // Teste para Sinnoh
  test('Validate Sinnoh Region', async ({ page }) => {
    await test.step('Select Sinnoh Region', async () => {
      await page.getByLabel('Select the region sinnoh').click();
      await expect(
        page.getByLabel('Open image of sinnoh region')
      ).toBeVisible();
    });

    await test.step('Validate Sinnoh Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('PLATINUM')).toBeVisible();
    });
  });

  // Teste para Unova
  test('Validate Unova Region', async ({ page }) => {
    await test.step('Select Unova Region', async () => {
      await page.getByLabel('Select the region unova').click();
      await expect(page.getByLabel('Open image of unova region')).toBeVisible();
    });

    await test.step('Validate Unova Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('BLACK-WHITE')).toBeVisible();
    });
  });

  // Teste para Kalos
  test('Validate Kalos Region', async ({ page }) => {
    await test.step('Select Kalos Region', async () => {
      await page.getByLabel('Select the region kalos').click();
      await expect(page.getByLabel('Open image of kalos region')).toBeVisible();
    });

    await test.step('Validate Kalos Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('X-Y')).toBeVisible();
    });
  });

  // Teste para Alola
  test('Validate Alola Region', async ({ page }) => {
    await test.step('Select Alola Region', async () => {
      await page.getByLabel('Select the region alola').click();
      await expect(page.getByLabel('Open image of alola region')).toBeVisible();
    });

    await test.step('Validate Alola Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('SUN-MOON')).toBeVisible();
    });
  });

  // Teste para Galar
  test('Validate Galar Region', async ({ page }) => {
    await test.step('Select Galar Region', async () => {
      await page.getByLabel('Select the region galar').click();
      await expect(page.getByLabel('Open image of galar region')).toBeVisible();
    });

    await test.step('Validate Galar Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('SWORD-SHIELD')).toBeVisible();
    });
  });

  // Teste para Hisui
  test('Validate Hisui Region', async ({ page }) => {
    await test.step('Select Hisui Region', async () => {
      await page.getByLabel('Select the region hisui').click();
      await expect(page.getByLabel('Open image of hisui region')).toBeVisible();
    });

    await test.step('Validate Hisui Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('LEGENDS-ARCEUS')).toBeVisible();
    });
  });

  // Teste para Paldea
  test('Validate Paldea Region', async ({ page }) => {
    await test.step('Select Paldea Region', async () => {
      await page.getByLabel('Select the region paldea').click();
      await expect(
        page.getByLabel('Open image of paldea region')
      ).toBeVisible();
    });

    await test.step('Validate Paldea Info', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByLabel('Regions Display Screen')).toBeVisible();
      await expect(page.getByText('SCARLET-VIOLET')).toBeVisible();
    });
  });
});

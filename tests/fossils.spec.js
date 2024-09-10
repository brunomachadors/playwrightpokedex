const { test, expect } = require('@playwright/test');

test.describe('Validate Fossils', () => {
  test.beforeEach(
    'Load Pokedex and clicks fossils button',
    async ({ page }) => {
      await page.goto('https://brunomachadors.github.io/pokedex/');
      await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
      await page.getByLabel('FOSSILS Button').click();
      await expect(page.getByLabel('Select Fossil')).toBeVisible();
    }
  );

  test('Validate Honey Fossil', async ({ page }) => {
    await test.step('Select Honeyl   Fossil', async () => {
      await page.getByLabel('Select the fossil honey').click();
      await expect(
        page.getByLabel('White Screen').getByText('HONEY')
      ).toBeVisible();
      await expect(page.getByLabel('Image of honey')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });

    // Clicar na informação
    await test.step('Validate Honey Information', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByText('#94 - HONEY')).toBeVisible();
      await expect(page.getByText('No short effect available')).toBeVisible();
      await expect(page.getByText('No short')).toHaveText(
        'No short effect available'
      );
    });

    // Clicar na foto
    await test.step('Click on Honey Picture', async () => {
      await page.getByLabel('Switch to Photo').click();
      await expect(page.getByLabel('Image of honey')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });
  });

  //Validação do root fossil.
  test('Validate Root Fossil', async ({ page }) => {
    // Clicar no fossil
    await test.step('Select Root Fossil', async () => {
      await page.getByLabel('Select the fossilroot-fossil').click();
      await expect(
        page.getByLabel('White Screen').getByText('ROOT-FOSSIL')
      ).toBeVisible();
      await expect(page.getByLabel('Image of root-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });

    // Clicar na informação
    await test.step('Validate Root Information', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByText('#99 - ROOT-FOSSIL')).toBeVisible();
      await expect(
        page.getByText('Can be revived into a Lileep.')
      ).toBeVisible();
      await expect(page.getByText('Can be')).toHaveText(
        'Can be revived into a Lileep.'
      );
      await expect(page.getByText('UNDERGROUND')).toBeVisible();
    });

    // Clicar na foto
    await test.step('Validate Root Picture', async () => {
      await page.getByLabel('Switch to Photo').click();
      await expect(page.getByLabel('Image of root-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });
  });

  //Validação do claw fossil.

  test('Validate Claw Fossil', async ({ page }) => {
    // Clicar no fossil
    await test.step('Select Claw-Fossil', async () => {
      await page.getByLabel('Select the fossilclaw-fossil').click();
      await expect(
        page.getByLabel('White Screen').getByText('CLAW-FOSSIL')
      ).toBeVisible();
      await expect(page.getByLabel('Image of claw-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });

    // Clicar na informação
    await test.step('Validate Claw-Fossil Information', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByText('#100 - CLAW-FOSSIL')).toBeVisible();
      await expect(
        page.getByText('Can be revived into an Anorith.')
      ).toBeVisible();
      await expect(page.getByText('Can be')).toHaveText(
        'Can be revived into an Anorith.'
      );
      await expect(page.getByText('UNDERGROUND')).toBeVisible();
    });

    // Clicar na foto
    await test.step('Click on Claw-Fossil Picture', async () => {
      await page.getByLabel('Switch to Photo').click();
      await expect(page.getByLabel('Image of claw-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });
  });

  //Validação do helix fossil.

  test('Validate Helix Fossil', async ({ page }) => {
    // Clicar no fossil
    await test.step('Select Helix-Fossil', async () => {
      await page.getByLabel('Select the fossilhelix-fossil').click();
      await expect(
        page.getByLabel('White Screen').getByText('HELIX-FOSSIL')
      ).toBeVisible();
      await expect(page.getByLabel('Image of helix-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });

    // Clicar na informação
    await test.step('Validate Helix Fossil Information', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByText('#101 - HELIX-FOSSIL')).toBeVisible();
      await expect(
        page.getByText('Can be revived into an Omanyte.')
      ).toBeVisible();
      await expect(page.getByText('Can be')).toHaveText(
        'Can be revived into an Omanyte.'
      );
      await expect(page.getByText('UNDERGROUND')).toBeVisible();
    });

    // Clicar na foto
    await test.step('Click on Helix Fossil Picture', async () => {
      await page.getByLabel('Switch to Photo').click();
      await expect(page.getByLabel('Image of helix-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });
  });

  //Validação do dome fossil.

  test('Validate Dome Fossil', async ({ page }) => {
    // Clicar no fossil
    await test.step('Select Dome-Fossil', async () => {
      await page.getByLabel('Select the fossildome-fossil').click();
      await expect(
        page.getByLabel('White Screen').getByText('DOME-FOSSIL')
      ).toBeVisible();
      await expect(page.getByLabel('Image of dome-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });

    // Clicar na informação
    await test.step('Validate Dome Fossil Information', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByText('#102 - DOME-FOSSIL')).toBeVisible();
      await expect(
        page.getByText('Can be revived into a Kabuto.')
      ).toBeVisible();
      await expect(page.getByText('Can be')).toHaveText(
        'Can be revived into a Kabuto.'
      );
      await expect(page.getByText('UNDERGROUND')).toBeVisible();
    });

    // Clicar na foto
    await test.step('Click on Dome Fossil Picture', async () => {
      await page.getByLabel('Switch to Photo').click();
      await expect(page.getByLabel('Image of dome-fossil')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });
  });

  //Validação do old amber.

  test('Validate Old  Amber Fossil', async ({ page }) => {
    // Clicar no fossil
    await test.step('Select Old-Amber Fossil', async () => {
      await page.getByLabel('Select the fossilold-amber').click();
      await expect(
        page.getByLabel('White Screen').getByText('OLD-AMBER')
      ).toBeVisible();
      await expect(page.getByLabel('Image of old-amber')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });

    // Clicar na informação
    await test.step('Validate on Old Amber Information', async () => {
      await page.getByLabel('Switch to Info').click();
      await expect(page.getByText('#103 - OLD-AMBER')).toBeVisible();
      await expect(
        page.getByText('Can be revived into an Aerodactyl.')
      ).toBeVisible();
      await expect(page.getByText('Can be')).toHaveText(
        'Can be revived into an Aerodactyl.'
      );
      await expect(page.getByText('UNDERGROUND')).toBeVisible();
    });

    // Clicar na foto
    await test.step('Click on Old Amber Picture', async () => {
      await page.getByLabel('Switch to Photo').click();
      await expect(page.getByLabel('Image of old-amber')).toBeVisible();
      await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
    });
  });
});

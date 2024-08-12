const { test } = require('@playwright/test');
const { FOSSILS } = require('../Data/fossils');
const { POManager } = require('../pages/POManager');

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const homepage = poManager.getHomePage();
  const fossil = poManager.getFossilPage();
  await homepage.navigateToUrl();
  await homepage.clickBntFossils();
  await fossil.switchToInfo();
});

test('Validate that Fossil Information is shown correctly for Claw Fossil', async ({
  page,
}) => {
  const poManager = new POManager(page);
  const homepage = poManager.getHomePage();
  const fossil = poManager.getFossilPage();

  await homepage.clickBntInfo();
  await fossil.clickOnFossil('#100 - claw-fossil');
  await fossil.verifyFossilInfo(
    '#100 - claw-fossil',
    'Can be revived into an Anorith.'
  );
});

test('Validate that Fossil Information is shown correctly for Root Fossil', async ({
  page,
}) => {
  const poManager = new POManager(page);
  const homepage = poManager.getHomePage();
  const fossil = poManager.getFossilPage();

  await homepage.clickBntInfo();
  await fossil.clickOnFossil('#99 - root-fossil');
  await fossil.verifyFossilInfo(
    '#99 - root-fossil',
    'Can be revived into a Lileep.'
  );
});

test.describe('Verify in batch the correct display of fossil information', () => {
  FOSSILS.forEach((fossil) => {
    let name = fossil.name;
    let underground = fossil.underground;

    test(`Validate that Fossil Information is shown correctly for ${name}`, async ({
      page,
    }) => {
      const poManager = new POManager(page);
      const homepage = poManager.getHomePage();
      const fossilPage = poManager.getFossilPage();

      await homepage.clickBntInfo();
      await fossilPage.clickOnFossil(name);
      await fossilPage.verifyFossilInfo(name, underground);
    });
  });
});

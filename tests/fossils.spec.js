const { test } = require('@playwright/test');
import { FOSSILS } from '../Data/fossils';
const { POManager } = require('../pages/POManager');

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const homepage = poManager.getHomePage();
  const fossil = poManager.getFossilPage();
  await homepage.navigateToUrl();
  await homepage.clickBntFossils();
  await fossil.validateFossilInfoIsLoadAfterClick();
});

test.describe('Verify in batch the correct display of fossil information', () => {
  FOSSILS.forEach((fossil) => {
    let name = fossil.name;
    let information = fossil.information;
    test(`Validate that Information is shown to ${fossil.name} fossil`, async ({
      page,
    }) => {
      const poManager = new POManager(page);
      const homepage = poManager.getHomePage();
      const fossil = poManager.getFossilPage();
      await fossil.clickOnSelectFossil(name);
      await homepage.clickBntInfo();
      await fossil.verifyFossilInfoToInformation(name, information);
    });
    const isUnderground = fossil.underground ? true : false;
    if (isUnderground) {
      let underground = fossil.underground;
      test(`Validate that Underground to ${fossil.underground} is shown to ${fossil.name} fossil`, async ({
        page,
      }) => {
        const poManager = new POManager(page);
        const homepage = poManager.getHomePage();
        const type = poManager.getFossilPage();
        await type.clickOnSelectFossil(name);
        await homepage.clickBntInfo();
        await type.verifyFossilInfoToUnderground(underground);
      });
    }
  });
});

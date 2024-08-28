const { test } = require('@playwright/test');
import { TYPES } from '../Data/types';
const { POManager } = require('../pages/POManager');

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const homepage = poManager.getHomePage();
  const type = poManager.getTypePage();
  await test.step('Given that accessed the types', async () => {
    await homepage.navigateToUrl();
    await homepage.clickBntTypes();
    await type.validateTypeInfoIsLoadAfterClick();
  })
});

test.describe('Validate Types', () => {
  test('Hard code - Validate that fighting icon Double Damage is shown to normal type', async ({
    page,
  }) => {
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    const type = poManager.getTypePage();

    await test.step('When select the normal type', async () => {
      await homepage.clickBntInfo();
      await type.clickOnSelectNormalType();
    })
    await test.step('Then will see the fighting icon Double Damage information', async () => {
      await type.verifyNormalTypeInfoToDoubleDamage();
    })
  });

  test('Hard code - Validate that Immune to ghost is shown to normal type', async ({
    page,
  }) => {
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    const type = poManager.getTypePage();

    await test.step('When select the normal type', async () => {
      await homepage.clickBntInfo();
      await type.clickOnSelectNormalType();
    })
    await test.step('Then will see the  Immune to ghost information', async () => {
      await type.verifyNormalTypeInfoToImmune();
    })
  });

  test.describe('Verify in batch the correct display of type information', () => {
    TYPES.forEach((type) => {
      let name = type.name;
      let doubleDamage = type.doubleDamage;
      test(`Validate that Double Damage is shown to ${type.name} type`, async ({
        page,
      }) => {
        const poManager = new POManager(page);
        const homepage = poManager.getHomePage();
        const type = poManager.getTypePage();

        await test.step(`When select the ${name} type`, async () => {
          await type.clickOnSelectType(name);
          await homepage.clickBntInfo();
        })
        await test.step(`Then will see the ${doubleDamage} icon Double Damage information`, async () => {
          await type.verifyTypeInfoToDoubleDamage(name, doubleDamage);
        })
      });
      const isImmune = type.immune ? true : false;
      if (isImmune) {
        let immune = type.immune;
        test(`Validate that Immune to ${type.immune} is shown to ${type.name} type`, async ({
          page,
        }) => {
          const poManager = new POManager(page);
          const homepage = poManager.getHomePage();
          const type = poManager.getTypePage();

          await test.step(`When select the ${name} type`, async () => {
            await type.clickOnSelectType(name);
            await homepage.clickBntInfo();
          })
          await test.step(`Then will see the  Immune to ${immune} information`, async () => {
            await type.verifyTypeInfoToImmune(immune);
          })
        });
      }
    });
  });
})
const { test } = require('@playwright/test');
import { TYPES } from '../Data/types';
const { POManager } = require('../pages/POManager');

test.beforeEach(async ({ page }) => {
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    const type = poManager.getTypePage();
    await homepage.navegateToUrl();
    await homepage.clickBntTypes();
    await type.validateTypeInfoIsLoadAfterClick();
});

test('Hard code - Validate that fighting icon Double Damage is showed to normal type', async ({ page }) => {
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    const type = poManager.getTypePage();

    await homepage.clickBntInfo();
    await type.clickOnSelectNormalType();
    await type.verifyNormalTypeInfoToDoubleDamage();
});

test('Hard code - Validate that Immune to ghost is showed to normal type', async ({ page }) => {
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    const type = poManager.getTypePage();

    await homepage.clickBntInfo();
    await type.clickOnSelectNormalType();
    await type.verifyNormalTypeInfoToImmune();
});

test.describe('Verify in batch the correct display of type information', () => {
    TYPES.forEach((type) => {
        let name = type.name;
        let doubleDamage = type.doubleDamage;
        test(`Validate that Double Damage is showed to ${type.name} type`, async ({ page }) => {
            const poManager = new POManager(page);
            const homepage = poManager.getHomePage();
            const type = poManager.getTypePage();
            await type.clickOnSelectType(name);
            await homepage.clickBntInfo();
            await type.verifyTypeInfoToDoubleDamage(name, doubleDamage);
        });
        const isImmune = type.immune ? true : false;
        if (isImmune) {
            let immune = type.immune;
            test(`Validate that Immune to ${type.immune} is showed to ${type.name} type`, async ({ page }) => {
                const poManager = new POManager(page);
                const homepage = poManager.getHomePage();
                const type = poManager.getTypePage();
                await type.clickOnSelectType(name);
                await homepage.clickBntInfo();
                await type.verifyTypeInfoToImmune(immune);
            });
        }
    });
});
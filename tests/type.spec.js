const { test, expect } = require('@playwright/test');
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
    await type.clickOnSelectType();
    await type.verifyTypeInfoToDoubleDamage();
});

test('Hard code - Validate that Immune to ghost is showed to normal type', async ({ page }) => {
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    const type = poManager.getTypePage();

    await homepage.clickBntInfo();
    await type.clickOnSelectType();
    await type.verifyTypeInfoToImmune();
});

test.describe('Verify in batch the correct display of type information', () => {
    TYPES.forEach((type) => {
        let selectType = 'Select the type ' + type.name;
        let icon = type.doubleDamage + ' icon';
        let immune = 'Immune to ' + type.immune;
        test(`Validate that Double Damage is showed to ${type.name} type`, async ({ page }) => {
            await expect(page.getByLabel('Select Type')).toBeVisible();
            await page.getByLabel(selectType).click();
            await expect(page.getByLabel('Switch to Info')).toBeVisible();
            await page.getByLabel('Switch to Info').click();

            await expect(page.getByLabel('White Screen').getByText(type.name.toUpperCase())).toContainText(type.name.toUpperCase());
            await expect(page.getByText('DOUBLE DAMAGEFROM:')).toBeVisible();
            await expect(page.getByRole('img', { name: icon }).first()).toBeVisible();
        });
        const isImmune = type.immune ? true : false;
        if (isImmune) {
            test(`Validate that Immune to ${type.immune} is showed to ${type.name} type`, async ({ page }) => {
                test.skip(type.immune == " " || type.immune == undefined);
                await expect(page.getByLabel('Select Type')).toBeVisible();
                await page.getByLabel(selectType).click();
                await expect(page.getByLabel('Switch to Info')).toBeVisible();
                await page.getByLabel('Switch to Info').click();

                await expect(page.getByLabel('White Screen').getByText(type.name.toUpperCase())).toBeVisible();
                await expect(page.getByText('IMUNITIES')).toContainText('IMUNITIES');
                await expect(page.getByLabel(immune).getByText(type.immune.toUpperCase())).toContainText(type.immune.toUpperCase());
            });
        }
    });
});





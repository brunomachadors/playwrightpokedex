const { expect } = require('@playwright/test');
class Type {
    constructor(page) {
        this.page = page;
        this.searchType =
            this.selectType = page.getByLabel('Select Type');
        this.chooseType = page.getByLabel('Select the type normal');
        this.typeName = page.getByLabel('White Screen').getByText('NORMAL');
        this.typeDoubleDamageFrom = page.getByText('DOUBLE DAMAGEFROM:');
        this.iconDoubleDamageFrom = page.getByRole('img', { name: 'fighting icon' });
        this.imunities = page.getByText('IMUNITIES');
        this.immuneTo = page.getByLabel('Immune to ghost').getByText('GHOST');
    }
    async validateTypeInfoIsLoadAfterClick() {
        expect(this.selectType).toBeVisible();
    }
    // locators (type){
    //     selectType = 'Select the type ' + type.typeName;
    //     icon = type.doubleDamage + ' icon';
    //     immune = 'Immune to ' + type.mmune;
    // }
    // selectTypeLocator(typeName) {
    //     selectType = 'Select the type ' + typeName;
    // }
    // typeIcon(doubleDamage) {
    //     icon = doubleDamage + ' icon';
    // }
    // immune(immune) {
    //     immune = 'Immune to ' + immune;
    // }

    async waitElementIsVisible(element) {
        await element.waitFor();
    }
    async clickOnSelectType() {
        this.waitElementIsVisible(this.chooseType);
        await this.chooseType.click();
    }
    async verifyTypeInfoToDoubleDamage() {
        expect(this.typeName).toBeVisible();
        await this.typeDoubleDamageFrom.waitFor();
        expect(this.typeDoubleDamageFrom).toBeVisible();
        await this.iconDoubleDamageFrom.waitFor();
        expect(this.iconDoubleDamageFrom).toBeVisible();
    }
    async verifyTypeInfoToImmune() {
        expect(this.typeName).toBeVisible();
        await this.imunities.waitFor();
        expect(this.imunities).toContainText('IMUNITIES');
        await this.immuneTo.waitFor();
        expect(this.immuneTo).toContainText('GHOST');
    }
}

module.exports = { Type }
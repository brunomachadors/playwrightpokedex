const { expect } = require('@playwright/test');
import { Page } from "@playwright/test";
class Type {

    constructor(page) {
        this.page = page;
        this.selectTypeText = page.getByLabel('Select Type');
        this.chooseTypeNormal = page.getByLabel('Select the type normal');
        this.typeNormal = page.getByLabel('White Screen').getByText('NORMAL');
        this.TypeDoubleDamageFrom = page.getByText('DOUBLE DAMAGEFROM:');
        this.normalIconDoubleDamageFrom = page.getByRole('img', { name: 'fighting icon' });
        this.imunities = page.getByText('IMUNITIES');
        this.normalImmuneTo = page.getByLabel('Immune to ghost').getByText('GHOST');
        
    }
    async validateTypeInfoIsLoadAfterClick() {
        expect(this.selectTypeText).toBeVisible();
    }
    
    selectTypeLocator(typeName) {
        let selectType = 'Select the type ' + typeName;
        let chooseType = this.page.getByLabel(selectType);
        return chooseType;
    }
    typeLocator(typeName){
        let type = this.page.getByLabel('White Screen').getByText(typeName.toUpperCase());
        return type;
    }
    typeIcon(doubleDamage) {
        let icon = doubleDamage + ' icon';
        let iconDoubleDamageFrom = this.page.getByRole('img', { name: icon });
        return iconDoubleDamageFrom;
    }
    immuneLocator(immune) {
        let immuneLabel = 'Immune to ' + immune;
        let immuneTo = this.page.getByLabel(immuneLabel).getByText(immune.toUpperCase());
        return immuneTo;
    }

    async waitElementIsVisible(element) {
        await element.waitFor();
    }
    async clickOnSelectNormalType() {
        this.waitElementIsVisible(this.chooseTypeNormal);
        await this.chooseTypeNormal.click();
    }
    async verifyNormalTypeInfoToDoubleDamage() {
        expect(this.typeNormal).toBeVisible();
        await this.TypeDoubleDamageFrom.waitFor();
        expect(this.TypeDoubleDamageFrom).toBeVisible();
        await this.normalIconDoubleDamageFrom.waitFor();
        expect(this.normalIconDoubleDamageFrom).toBeVisible();
    }
    async verifyNormalTypeInfoToImmune() {
        expect(this.typeNormal).toBeVisible();
        await this.imunities.waitFor();
        expect(this.imunities).toContainText('IMUNITIES');
        await this.normalImmuneTo.waitFor();
        expect(this.normalImmuneTo).toContainText('GHOST');
    }
    async clickOnSelectType(typeName) {
        let chooseType = this.selectTypeLocator(typeName);
        this.waitElementIsVisible(chooseType);
        await chooseType.click();
    }
    async verifyTypeInfoToDoubleDamage(typeName, doubleDamage) {
        let type = this.typeLocator(typeName);
        let iconDoubleDamageFrom = this.typeIcon(doubleDamage);
        this.waitElementIsVisible(type);
        expect(type).toBeVisible();
        await this.waitElementIsVisible(iconDoubleDamageFrom);
        expect(iconDoubleDamageFrom).toBeVisible();
    }
    async verifyTypeInfoToImmune(immune) {
        let immuneTo = this.immuneLocator(immune);
        await this.imunities.waitFor();
        expect(this.imunities).toContainText('IMUNITIES');
        await this.waitElementIsVisible(immuneTo);
        expect(immuneTo).toContainText(immune.toUpperCase());
    }
}

module.exports = { Type }
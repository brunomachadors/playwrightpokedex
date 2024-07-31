const { expect } = require('@playwright/test');

class Type {
  constructor(page) {
    this.page = page;
    this.selectTypeText = page.getByLabel('Select Type');
    this.chooseTypeNormal = page.getByLabel('Select the type normal');
    this.typeNormal = page.getByLabel('White Screen').getByText('NORMAL');
    this.TypeDoubleDamageFrom = page.getByText('DOUBLE DAMAGEFROM:');
    this.normalIconDoubleDamageFrom = page.getByRole('img', {
      name: 'fighting icon',
    });
    this.imunities = page.getByText('IMUNITIES');
    this.normalImmuneTo = page.getByLabel('Immune to ghost').getByText('GHOST');
  }

  // Locators
  selectTypeLocator(typeName) {
    return this.page.getByLabel(`Select the type ${typeName}`);
  }

  typeLocator(typeName) {
    return this.page
      .getByLabel('White Screen')
      .getByText(typeName.toUpperCase());
  }

  typeIcon(doubleDamage) {
    return this.page.getByRole('img', { name: `${doubleDamage} icon` });
  }

  immuneLocator(immune) {
    return this.page
      .getByLabel(`Immune to ${immune}`)
      .getByText(immune.toUpperCase());
  }

  // Actions
  async clickOnSelectNormalType() {
    await expect(this.chooseTypeNormal).toBeVisible();
    await this.chooseTypeNormal.click();
  }

  async clickOnSelectType(typeName) {
    const chooseType = this.selectTypeLocator(typeName);
    await expect(chooseType).toBeVisible();
    await chooseType.click();
  }

  // Validations
  async validateTypeInfoIsLoadAfterClick() {
    await expect(this.selectTypeText).toBeVisible();
  }

  async verifyNormalTypeInfoToDoubleDamage() {
    await expect(this.typeNormal).toBeVisible();
    await expect(this.TypeDoubleDamageFrom).toBeVisible();
    await expect(this.normalIconDoubleDamageFrom).toBeVisible();
  }

  async verifyNormalTypeInfoToImmune() {
    await expect(this.typeNormal).toBeVisible();
    await expect(this.imunities).toBeVisible();
    await expect(this.imunities).toContainText('IMUNITIES');
    await expect(this.normalImmuneTo).toBeVisible();
    await expect(this.normalImmuneTo).toContainText('GHOST');
  }

  async verifyTypeInfoToDoubleDamage(typeName, doubleDamage) {
    const type = this.typeLocator(typeName);
    const iconDoubleDamageFrom = this.typeIcon(doubleDamage);
    await expect(type).toBeVisible();
    await expect(iconDoubleDamageFrom).toBeVisible();
  }

  async verifyTypeInfoToImmune(immune) {
    const immuneTo = this.immuneLocator(immune);
    await expect(this.imunities).toBeVisible();
    await expect(this.imunities).toContainText('IMUNITIES');
    await expect(immuneTo).toBeVisible();
    await expect(immuneTo).toContainText(immune.toUpperCase());
  }
}

module.exports = { Type };

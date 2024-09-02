const { expect } = require('@playwright/test');

class Type {
  constructor(page) {
    this.page = page;
    this.selectRegion = page.getByLabel('REGIONS Button');
    this.regionList = page.getByLabel('Region list');
    this.selectImageRegion = page.getByLabel('Switch to Photo');
    this.selectInfoRegion = page.getByLabel('Switch to Info');
    this.Kanto = page.getByLabel('Select the region kanto');
    this.Johto = page.getByLabel('Select the region Johto');
    this.Hoenn = page.getByLabel('Select the region Hoenn');
    this.Sinnoh = page.getByLabel('Select the region Sinnoh');
    this.Unova = page.getByLabel('Select the region Unova');
    this.Kalos = page.getByLabel('Select the region Kalos');
    this.Alola = page.getByLabel('Select the region Alola');
    this.Galar = page.getByLabel('Select the region Galar');
    this.Hisui = page.getByLabel('Select the region Hisui');
    this.Paldea = page.getByLabel('Select the region Paldea');
  }

  // Actions
  async navigateToUrl() {
    await this.page.goto('');
  }

  async clickBntRegion() {
    await expect(this.selectRegion).toBeVisible();
    await this.selectRegion.click();
    await expect(this.regionList).toBeVisible();
  }

  async validadeKanto() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Kanto.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeJohto() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Johto.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeHoenn() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Hoenn.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeSinnoh() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Sinnoh.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeUnova() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Unova.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeKalos() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Kalos.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeAlola() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Alola.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeGalar() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Galar.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadeHisui() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Hisui.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }

  async validadePaldea() {
    await expect(this.clickBntRegion).toBeVisible();
    await this.Paldea.click();
    await this.selectImageRegion.click();
    await this.selectInfoRegion.click();
  }
}

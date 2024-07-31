const { expect } = require('@playwright/test');

class Homepage {
  constructor(page) {
    this.page = page;
    this.pokemon = page.getByLabel('POKÉMON Button');
    this.types = page.getByLabel('TYPES Button');
    this.items = page.getByLabel('ITEMS Button');
    this.regions = page.getByLabel('REGIONS Button');
    this.fossils = page.getByLabel('FOSSILS Button');
    this.photoBtn = page.getByLabel('Switch to Photo');
    this.infoBtn = page.getByLabel('Switch to Info');
    this.gifPikachu = page.getByLabel('Animated Pikachu GIF');
    this.gitHubRedirect = page.getByLabel('Redirect to GitHub account');
  }

  // Actions
  async navigateToUrl() {
    await this.page.goto('');
  }

  async clickBntPokemon() {
    await expect(this.pokemon).toBeVisible();
    await this.pokemon.click();
  }

  async clickBntTypes() {
    await expect(this.types).toBeVisible();
    await this.types.click();
  }

  async clickBntItems() {
    await expect(this.items).toBeVisible();
    await this.items.click();
  }

  async clickBntRegions() {
    await expect(this.regions).toBeVisible();
    await this.regions.click();
  }

  async clickBntFossils() {
    await expect(this.fossils).toBeVisible();
    await this.fossils.click();
  }

  async clickBntPhoto() {
    await expect(this.photoBtn).toBeVisible();
    await this.photoBtn.click();
  }

  async clickBntInfo() {
    await expect(this.infoBtn).toBeVisible();
    await this.infoBtn.click();
  }

  // Validations
  async validateBtnTypesIsVisible() {
    await expect(this.types).toBeVisible();
  }

  async validateHomePage() {
    await expect(this.photoBtn).toBeVisible();
    await expect(this.infoBtn).toBeVisible();
    await expect(this.infoBtn).toHaveRole('button');
    await expect(this.types).toHaveText('TYPES');
  }
}

module.exports = { Homepage };

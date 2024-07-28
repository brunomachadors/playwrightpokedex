const { expect } = require('@playwright/test');
class Homepage {
    constructor (page) {
        this.page = page;
        this.pokemon = page.getByLabel('POKÉMON Button');
        this.types = page.getByLabel('TYPES Button');
        this.items = page.getByLabel('ITEMS Button');
        this.regions = page.getByLabel('REGIONS Button');
        this.fossils = page.getByLabel('FOSSILS Button');
        this.photoBtn =  page.getByLabel('Switch to Photo');
        this.infoBtn = page.getByLabel('Switch to Info');
        this.gifPikachu = page.getByLabel('Animated Pikachu GIF');
        this.gitHubRedirect = page.getByLabel('Redirect to GitHub account');
    }
    async navegateToUrl (url) { await this.page.goto('');}
    async clickBntPokemon (){
        await this.pokemon.click();
    } 
    async clickBntTypes (){
        await this.types.click();
    }
    async clickBntItems (){
        await this.items.click();
    }
    async clickBntRegions (){
        await this.regions.click();
    }
    async clickBntFossils (){
        await this.fossils.click();
    }
    async clickBntPhoto (){
        await this.photoBtn.click();
    }
    async clickBntInfo (){
        await this.infoBtn.click();
    }
    async validateHomePage() {
        expect(this.pokemon).toBeVisible();
        expect(this.infoBtn).toBeVisible();
        expect(this.infoBtn).toHaveRole('button');
        expect(this.types).toHaveText('TYPES')
    }

}

module.exports = { Homepage }
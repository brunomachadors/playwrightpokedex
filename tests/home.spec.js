const { test } = require('@playwright/test');
const { POManager } = require('../pages/POManager');

test( 'Validate home', async ({page}) =>{
    const poManager = new POManager(page);
    const homepage = poManager.getHomePage();
    await homepage.navegateToUrl();
    await homepage.clickBntPokemon();
    await homepage.validateHomePage();
})
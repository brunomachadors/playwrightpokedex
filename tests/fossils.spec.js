const { test, expect } = require('@playwright/test');

test('Select Pokémon Fossil', async ({ page }) => {

// 1 - ITEM EFFECT HONEY
  // Navegar até a página da Pokedex
  await page.goto('https://brunomachadors.github.io/pokedex/');
  await expect(page.getByLabel('FOSSILS Button')).toBeVisible();

  // Clicar o botão
  await page.getByLabel('FOSSILS Button').click();
  await expect(page.getByLabel('Select Fossil')).toBeVisible();

  // Clicar no fossil
  await page.getByLabel('Select the fossilhoney').click();
  await expect(page.getByLabel('White Screen').getByText('HONEY')).toBeVisible();
  await expect(page.getByLabel('Image of honey')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();

  // Clicar na informação
  await page.getByLabel('Switch to Info').click();
  await expect(page.getByText('#94 - HONEY')).toBeVisible();
  await expect(page.getByText('No short effect available')).toBeVisible();
  await expect(page.getByText('No short')).toHaveText('No short effect available');

  // Clicar na foto
  await page.getByLabel('Switch to Photo').click();
  await expect(page.getByLabel('Image of honey')).toBeVisible();
  await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();


  
// 2 - ITEM EFFECT ROOT-FOSSIL
   // Navegar até a página da Pokedex
   await page.goto('https://brunomachadors.github.io/pokedex/');
   await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
 
   // Clicar o botão
   await page.getByLabel('FOSSILS Button').click();
   await expect(page.getByLabel('Select Fossil')).toBeVisible();
 
   // Clicar no fossil
   await page.getByLabel('Select the fossilroot-fossil').click();
   await expect(page.getByLabel('White Screen').getByText('ROOT-FOSSIL')).toBeVisible();
   await expect(page.getByLabel('Image of root-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
 
   // Clicar na informação
   await page.getByLabel('Switch to Info').click();
   await expect(page.getByText('#99 - ROOT-FOSSIL')).toBeVisible();
   await expect(page.getByText('Can be revived into a Lileep.')).toBeVisible();
   await expect(page.getByText('Can be')).toHaveText('Can be revived into a Lileep.');
   await expect(page.getByText('UNDERGROUND')).toBeVisible();

   // Clicar na foto
   await page.getByLabel('Switch to Photo').click();
   await expect(page.getByLabel('Image of root-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();


  
// 3- ITEM EFFECT CLAW-FOSSIL
   // Navegar até a página da Pokedex
   await page.goto('https://brunomachadors.github.io/pokedex/');
   await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
 
   // Clicar o botão
   await page.getByLabel('FOSSILS Button').click();
   await expect(page.getByLabel('Select Fossil')).toBeVisible();
 
   // Clicar no fossil
   await page.getByLabel('Select the fossilclaw-fossil').click();
   await expect(page.getByLabel('White Screen').getByText('CLAW-FOSSIL')).toBeVisible();
   await expect(page.getByLabel('Image of claw-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
 
   // Clicar na informação
   await page.getByLabel('Switch to Info').click();
   await expect(page.getByText('#100 - CLAW-FOSSIL')).toBeVisible();
   await expect(page.getByText('Can be revived into an Anorith.')).toBeVisible();
   await expect(page.getByText('Can be')).toHaveText('Can be revived into an Anorith.');
   await expect(page.getByText('UNDERGROUND')).toBeVisible();

   // Clicar na foto
   await page.getByLabel('Switch to Photo').click();
   await expect(page.getByLabel('Image of claw-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();



// 4 - ITEM EFFECT HELIX-FOSSIL
   // Navegar até a página da Pokedex
   await page.goto('https://brunomachadors.github.io/pokedex/');
   await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
 
   // Clicar o botão
   await page.getByLabel('FOSSILS Button').click();
   await expect(page.getByLabel('Select Fossil')).toBeVisible();
 
   // Clicar no fossil
   await page.getByLabel('Select the fossilhelix-fossil').click();
   await expect(page.getByLabel('White Screen').getByText('HELIX-FOSSIL')).toBeVisible();
   await expect(page.getByLabel('Image of helix-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
 
   // Clicar na informação
   await page.getByLabel('Switch to Info').click();
   await expect(page.getByText('#101 - HELIX-FOSSIL')).toBeVisible();
   await expect(page.getByText('Can be revived into an Omanyte.')).toBeVisible();
   await expect(page.getByText('Can be')).toHaveText('Can be revived into an Omanyte.');
   await expect(page.getByText('UNDERGROUND')).toBeVisible();

   // Clicar na foto
   await page.getByLabel('Switch to Photo').click();
   await expect(page.getByLabel('Image of helix-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();


  
// 5 - ITEM EFFECT DOME-FOSSIL
   // Navegar até a página da Pokedex
   await page.goto('https://brunomachadors.github.io/pokedex/');
   await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
 
   // Clicar o botão
   await page.getByLabel('FOSSILS Button').click();
   await expect(page.getByLabel('Select Fossil')).toBeVisible();
 
   // Clicar no fossil
   await page.getByLabel('Select the fossildome-fossil').click();
   await expect(page.getByLabel('White Screen').getByText('DOME-FOSSIL')).toBeVisible();
   await expect(page.getByLabel('Image of dome-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
 
   // Clicar na informação
   await page.getByLabel('Switch to Info').click();
   await expect(page.getByText('#102 - DOME-FOSSIL')).toBeVisible();
   await expect(page.getByText('Can be revived into a Kabuto.')).toBeVisible();
   await expect(page.getByText('Can be')).toHaveText('Can be revived into a Kabuto.');
   await expect(page.getByText('UNDERGROUND')).toBeVisible();

   // Clicar na foto
   await page.getByLabel('Switch to Photo').click();
   await expect(page.getByLabel('Image of dome-fossil')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();



// 6 - ITEM EFFECT OLD-AMBER
   // Navegar até a página da Pokedex
   await page.goto('https://brunomachadors.github.io/pokedex/');
   await expect(page.getByLabel('FOSSILS Button')).toBeVisible();
 
   // Clicar o botão
   await page.getByLabel('FOSSILS Button').click();
   await expect(page.getByLabel('Select Fossil')).toBeVisible();
 
   // Clicar no fossil
   await page.getByLabel('Select the fossilold-amber').click();
   await expect(page.getByLabel('White Screen').getByText('OLD-AMBER')).toBeVisible();
   await expect(page.getByLabel('Image of old-amber')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();
 
   // Clicar na informação
   await page.getByLabel('Switch to Info').click();
   await expect(page.getByText('#103 - OLD-AMBER')).toBeVisible();
   await expect(page.getByText('Can be revived into an Aerodactyl.')).toBeVisible();
   await expect(page.getByText('Can be')).toHaveText('Can be revived into an Aerodactyl.');
   await expect(page.getByText('UNDERGROUND')).toBeVisible();

   // Clicar na foto
   await page.getByLabel('Switch to Photo').click();
   await expect(page.getByLabel('Image of old-amber')).toBeVisible();
   await expect(page.getByText('Category:DEX-COMPLETION')).toBeVisible();

});
  


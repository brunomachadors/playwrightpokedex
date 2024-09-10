        const poManager = new POManager(page);
        const homepage = poManager.getHomePage();
        const type = poManager.getTypePage();
 teststeps
        await type.clickOnSelectType(name);
        await homepage.clickBntInfo();
        await type.verifyTypeInfoToImmune(immune);
      });
    }
  });
});


        await test.step(`When select the ${name} type`, async () => {
          await type.clickOnSelectType(name);
          await homepage.clickBntInfo();
        })
        await test.step(`Then will see the ${doubleDamage} icon Double Damage information`, async () => {
          await type.verifyTypeInfoToDoubleDamage(name, doubleDamage);
        })
      });
      const isImmune = type.immune ? true : false;
      if (isImmune) {
        let immune = type.immune;
        test(`Validate that Immune to ${type.immune} is shown to ${type.name} type`, async ({
          page,
        }) => {
          const poManager = new POManager(page);
          const homepage = poManager.getHomePage();
          const type = poManager.getTypePage();

          await test.step(`When select the ${name} type`, async () => {
            await type.clickOnSelectType(name);
            await homepage.clickBntInfo();
          })
          await test.step(`Then will see the  Immune to ${immune} information`, async () => {
            await type.verifyTypeInfoToImmune(immune);
          })
        });
      }
    });
  });
})


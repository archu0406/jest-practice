const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe("tea",['milk','sugar','teapowder']);

      expect(myCookbook.recipes).toEqual({tea: ['milk','sugar','teapowder']});


    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('tea',['milk','sugar','teapowder']);
      myCookbook.addRecipe('cookie',['flour','milk','choco chips']);

      const myReceipes = myCookbook.listRecipes();

      expect(myReceipes).toEqual(['tea','cookie']);

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('tea',['milk','sugar','teapowder']);
      myCookbook.addRecipe('cookie',['flour','milk','choco chips']);

      const myReceipe = myCookbook.getRecipe(['cookie']);

      expect(myReceipe).toEqual(['flour','milk','choco chips']);

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});

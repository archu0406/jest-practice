const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      const message = myCookbookCli.add('pizza',['bread','cheese','toppings']);

      expect(message).toEqual('Successfully added the following recipe: pizza'); 

    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('pizza',['bread','cheese','toppings']);
      myCookbookCli.add('hotdog',['bread','meat','cheese']);

      const message =  myCookbookCli.list();

      expect(message).toEqual('You have the following recipes: pizza,hotdog');
      
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('pizza',['bread','cheese','toppings']);
      myCookbookCli.add('hotdog',['bread','meat','cheese']);

      const message =  myCookbookCli.get('hotdog');
      
      expect(message).toEqual('The ingredients for hotdog are: bread,meat,cheese');
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
     
    });
  });
});

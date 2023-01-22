import FoodCategory from './models/foodCategory';
import Recipe from './models/recipe';

export const foodCategories: FoodCategory[] = [
  new FoodCategory('0', 'risottoPasta', 'Risotto & Pasta', 'blue'),
  new FoodCategory('1', 'meatFish', 'Meat & Fish', 'brown'),
  new FoodCategory('2', 'veggiesSides', 'Veggies & Sides', 'green'),
  new FoodCategory('3', 'dessertsSweets', 'Desserts & Sweets', 'yellow'),
];

export const initialMockedRecipes: Recipe[] = [
  new Recipe(
    'Pasta alla carbonara',
    'risottoPasta',
    'https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Carbonara-ricetta-5328.jpg',
    '12/15/2022',
    'Pasta, 200 gr; bacon, 1/2 cup;',
    'Cook the pasta and in another pan cook the bacon'
  ),
  new Recipe(
    'Risotto radicchio e salsiccia',
    'risottoPasta',
    'https://blog.giallozafferano.it/maniamore/wp-content/uploads/2021/02/RIOTTO-RADICCHIO-E-SALSICCIA-6495-720x480.jpg',
    '9/5/2022',
    'Rice, 1 cup; sausage, 1/2 cup;',
    'Cook the rice with broth and in the end add the sausage'
  ),
  new Recipe(
    'Vitello Tonnato',
    'meatFish',
    'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2010/06/ricetta-vitello-tonnato/_jcr_content/header-par/image_single.img.jpg/1594134618443.jpg',
    '4/10/2021',
    'Calf meat, 1 kg; tuna fish, 1 cup;',
    'Cook the meat overnight and make a sause with the tuna'
  ),
  new Recipe(
    'Polpo alla brace',
    'meatFish',
    'https://www.ricettedalmondo.it/images/foto-ricette/p/32744-polpo-alla-griglia.jpg',
    '7/20/2021',
    'Octopus, 1 piece; lemon juice;',
    'Cook the octopus and serve with a sprinkle of lemon juice'
  ),
  new Recipe(
    'Patate arrosto',
    'veggiesSides',
    'https://www.giallozafferano.it/images/242-24202/Patate-al-forno_450x300.jpg',
    '4/21/2022',
    'Potato, 1 kg; extra virgin olive oil, 1 tbsp; salt, 1tsp;',
    'Cut the potatoes and bake them'
  ),
  new Recipe(
    'Melanzane alla parmigiana',
    'veggiesSides',
    'https://www.fattoincasadabenedetta.it/wp-content/uploads/2022/02/AdobeStock_296698970-min-min-1200x900.jpeg',
    '1/15/2023',
    'Aubergines, 3; salt, 1/2 tsp;',
    'Cut the aubergines in slices and fry them'
  ),
  new Recipe(
    'Zucchini Brownies',
    'dessertsSweets',
    'https://iambaker.net/wp-content/uploads/2018/06/zucchini-brownies-1.jpg',
    '1/15/2023',
    'Zucchini, 2 cups; cacao powder, 1/2 cup;',
    'Mix the shredded with the cacao powder'
  ),
  new Recipe(
    'Salame di cioccolato',
    'dessertsSweets',
    'https://www.fattoincasadabenedetta.it/wp-content/uploads/2016/03/Senza-titolo-1-2.jpg',
    '1/10/2023',
    'Chocolate, 2 cups; cacao powder, 1/2 cup; Butter, 1 cup;',
    'Break the cookies and mix them with all the remaining ingredients'
  ),
];

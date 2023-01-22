// id, title, category, imageUrl, date, ingredients, instructions
import { v4 as uuidv4 } from 'uuid';

class Recipe {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
  ingredients: string;
  instructions: string;

  constructor(
    title: string,
    category: string,
    imageUrl: string,
    date: string,
    ingredients: string,
    instructions: string
  ) {
    this.id = uuidv4();
    this.title = title;
    this.category = category;
    this.imageUrl = imageUrl;
    this.date = date;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}

export default Recipe;

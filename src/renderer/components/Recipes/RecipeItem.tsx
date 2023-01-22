import React, { useContext } from 'react';
import Recipe from 'renderer/models/recipe';
import { RecipesContext } from 'renderer/store/recipes-context';
import classes from './RecipeItem.module.css';
import { RecipesContextObj } from 'renderer/store/recipes-context';

const RecipeItem: React.FC<{ recipe: Recipe; color: string }> = ({
  recipe,
  color,
}) => {
  const ctx = useContext<RecipesContextObj>(RecipesContext);

  function viewRecipeHandler() {
    ctx.activateRecipe(recipe.id);
  }

  return (
    <div className={classes.recipeCard} onClick={viewRecipeHandler}>
      <header className={`${color}-lighter`}>{recipe.title}</header>
      <main>
        <img src={recipe.imageUrl} alt={recipe.title} />
      </main>
    </div>
  );
};

export default RecipeItem;

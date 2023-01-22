import React, { useContext, useEffect, useState } from 'react';
import Recipe from 'renderer/models/recipe';
import {
  RecipesContext,
  RecipesContextObj,
} from 'renderer/store/recipes-context';
import classes from './RecipesCategoryItem.module.css';
import { foodCategories } from 'renderer/recipes-config';
import RecipeItem from './RecipeItem';

const RecipesCategoryItem: React.FC<{ category: string }> = ({ category }) => {
  const ctx = useContext<RecipesContextObj>(RecipesContext);

  const [currentRecipes, setCurrentRecipes] = useState<Recipe[]>(ctx.recipes);

  const { label: currentCategoryLabel, primaryColor: currentCategoryColor } =
    foodCategories.filter((cat) => cat.value === category).at(0)!;

  useEffect(() => {
    if (!ctx.yearFilter) {
      setCurrentRecipes(ctx.recipes);
    } else {
      const newRecipeArray: Recipe[] = ctx.recipes.filter(
        (rec) => new Date(rec.date).getFullYear().toString() === ctx.yearFilter
      );
      setCurrentRecipes(newRecipeArray);
    }
  }, [ctx.yearFilter, ctx.recipes]);

  const categoryRecipes: Recipe[] = currentRecipes.filter(
    (recipe) => recipe.category === category
  );

  return (
    <div className={classes.recipesColumn}>
      <header className={`${currentCategoryColor}`}>
        {currentCategoryLabel}
      </header>
      <main>
        {categoryRecipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            color={currentCategoryColor}
          />
        ))}
      </main>
    </div>
  );
};

export default RecipesCategoryItem;

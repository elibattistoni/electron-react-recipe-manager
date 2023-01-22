import React, { PropsWithChildren, useEffect, useState } from 'react';
import Recipe from 'renderer/models/recipe';
import { initialMockedRecipes } from 'renderer/recipes-config';

export type RecipesContextObj = {
  recipes: Recipe[];
  addRecipe: (recipeInstance: Recipe) => void;
  removeRecipe: (recipeId: string) => void;
  removeAllRecipes: () => void;
  activateRecipe: (recipeId: string) => void;
  activatedRecipe: Recipe | null;
  deActivateRecipe: () => void;
  applyYearFilter: (year: string) => void;
  removeYearFilter: () => void;
  yearFilter: string | null;
};

export const RecipesContext = React.createContext<RecipesContextObj>({
  recipes: [],
  addRecipe: (recipeInstance) => {},
  removeRecipe: (recipeId) => {},
  removeAllRecipes: () => {},
  activateRecipe: (recipeId) => {},
  activatedRecipe: null,
  deActivateRecipe: () => {},
  applyYearFilter: (year) => {},
  removeYearFilter: () => {},
  yearFilter: null,
});

const RecipeContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activatedRecipe, setActivatedRecipe] = useState<Recipe | null>(null);
  const [yearFilter, setYearFilter] = useState<string | null>(null);

  function uploadUpdatedRecipes(recipeArray: Recipe[]) {
    localStorage.setItem('recipes', JSON.stringify(recipeArray));
  }

  function retrieveRecipes(): Recipe[] {
    const storage = localStorage.getItem('recipes');
    if (!storage) return [];
    return JSON.parse(storage);
  }

  useEffect(() => {
    let storedRecipes = retrieveRecipes();

    if (storedRecipes.length === 0) {
      uploadUpdatedRecipes(initialMockedRecipes);
      storedRecipes = retrieveRecipes();
    }
    setRecipes(storedRecipes);
  }, []);

  function addRecipe(recipeInstance: Recipe) {
    setRecipes((currentRecipes) => {
      const newRecipeArray: Recipe[] = [recipeInstance, ...currentRecipes];
      uploadUpdatedRecipes(newRecipeArray);
      return newRecipeArray;
    });
  }

  function removeRecipe(recipeId: string) {
    setRecipes((currRecipes) => {
      const newRecipeArray: Recipe[] = currRecipes.filter(
        (rec) => rec.id !== recipeId
      );
      uploadUpdatedRecipes(newRecipeArray);
      return newRecipeArray;
    });
  }

  function removeAllRecipes() {
    setRecipes([]);
    localStorage.removeItem('recipes');
  }

  function activateRecipe(recipeId: string): void {
    const matchingRecipe: Recipe = recipes
      .filter((rec) => rec.id === recipeId)
      .at(0)!;
    setActivatedRecipe(matchingRecipe);
  }

  function deActivateRecipe(): void {
    setActivatedRecipe(null);
  }

  function applyYearFilter(year: string) {
    setYearFilter(year);
  }

  function removeYearFilter() {
    setYearFilter(null);
  }

  const contextValue: RecipesContextObj = {
    recipes,
    addRecipe,
    removeRecipe,
    removeAllRecipes,
    activateRecipe,
    activatedRecipe,
    deActivateRecipe,
    applyYearFilter,
    removeYearFilter,
    yearFilter,
  };

  return (
    <RecipesContext.Provider value={contextValue}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipeContextProvider;

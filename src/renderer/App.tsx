import { Fragment, useContext } from 'react';
import NewRecipe from './components/NewRecipe/NewRecipe';
import { RecipesContext, RecipesContextObj } from './store/recipes-context';
import Recipes from './components/Recipes/Recipes';
import RecipeModal from './components/RecipeModal/RecipeModal';
import RecipeFilter from './components/RecipeFilter/RecipeFilter';

function App() {
  const ctx = useContext<RecipesContextObj>(RecipesContext);

  function closeModalHandler(): void {
    ctx.deActivateRecipe();
  }

  return (
    <Fragment>
      <NewRecipe />
      <RecipeFilter />
      <Recipes />
      {ctx.activatedRecipe && (
        <RecipeModal
          recipe={ctx.activatedRecipe}
          onCloseModal={closeModalHandler}
        />
      )}
    </Fragment>
  );
}

export default App;

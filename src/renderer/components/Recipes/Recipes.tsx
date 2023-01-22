import React, { Fragment, useContext } from 'react';
import {
  RecipesContext,
  RecipesContextObj,
} from 'renderer/store/recipes-context';
import classes from './Recipes.module.css';
import { FaTrash } from 'react-icons/fa';
import { foodCategories } from 'renderer/recipes-config';
import RecipesCategoryItem from './RecipesCategoryItem';

const Recipes: React.FC = () => {
  const ctx = useContext<RecipesContextObj>(RecipesContext);

  function removeAllRecipesHandler(): void {
    ctx.removeAllRecipes();
  }

  return (
    <Fragment>
      <section className={classes.recipesContainer}>
        {foodCategories.map((cat) => (
          <RecipesCategoryItem category={cat.value} key={cat.id} />
        ))}
      </section>
      <footer className={classes.footerTrash}>
        <button
          type="button"
          className={classes.trashBtn}
          onClick={removeAllRecipesHandler}
        >
          <FaTrash className={classes.trashIcon} />
        </button>
      </footer>
    </Fragment>
  );
};

export default Recipes;

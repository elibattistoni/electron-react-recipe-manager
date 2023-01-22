import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import { FaTrash } from 'react-icons/fa';
import Recipe from 'renderer/models/recipe';
import { foodCategories } from 'renderer/recipes-config';
import { RecipesContext } from 'renderer/store/recipes-context';
import classes from './RecipeModal.module.css';
import { RecipesContextObj } from 'renderer/store/recipes-context';

const Backdrop: React.FC<{ onCloseModal: () => void }> = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>;
};

const Overlay: React.FC<{ recipe: Recipe; onCloseModal: () => void }> = (
  props
) => {
  const ctx = useContext<RecipesContextObj>(RecipesContext);

  const { primaryColor: currentCategoryColor } = foodCategories
    .filter((cat) => cat.value === props.recipe.category)
    .at(0)!;

  function removeRecipeHandler() {
    ctx.removeRecipe(props.recipe.id);
    props.onCloseModal();
  }

  return (
    <div className={classes.modal}>
      <header className={`${classes.modalHeader} ${currentCategoryColor}`}>
        <h1>{props.recipe.title}</h1>
        <span>{props.recipe.date}</span>
      </header>
      <main className={classes.modalMain}>
        <img src={props.recipe.imageUrl} alt={props.recipe.title} />
        <div className={classes.modalIngredients}>
          <h2>Ingredients</h2>
          <span>{props.recipe.ingredients}</span>
        </div>
        <div className={classes.modalInstructions}>
          <h2>Instructions</h2>
          <span>{props.recipe.instructions}</span>
        </div>
      </main>
      <footer>
        <button
          type="button"
          className={classes.trashBtn}
          onClick={removeRecipeHandler}
        >
          <FaTrash className={classes.trashIcon} />
        </button>
      </footer>
    </div>
  );
};

const portalElement: HTMLElement = document.getElementById('overlay')!;

const RecipeModal: React.FC<{
  recipe: Recipe;
  onCloseModal: () => void;
}> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <Overlay recipe={props.recipe} onCloseModal={props.onCloseModal} />,
        portalElement
      )}
    </Fragment>
  );
};
export default RecipeModal;

import classes from './NewRecipe.module.css';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import RecipeForm from './RecipeForm';

const NewRecipe: React.FC<{}> = () => {
  // state for managing the form
  const [wantsToAdd, setWantsToAdd] = useState<boolean>(false);

  // handler for showing the form (change the state)
  const toggleFormHandler = () =>
    setWantsToAdd((currentState) => !currentState);

  // handler for hiding the form (change the state)
  const hideFormHandler = () => setWantsToAdd(false);

  return (
    <section className={classes['new-recipe__card']}>
      <button
        className={classes['new-recipe__btn']}
        onClick={toggleFormHandler}
      >
        <FaPlus className={classes.icon} />
        <span>Add New Recipe</span>
      </button>
      {wantsToAdd && <RecipeForm onClose={hideFormHandler} />}
    </section>
  );
};

export default NewRecipe;

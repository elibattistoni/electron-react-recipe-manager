import { useContext, useState } from 'react';
import { RecipesContext } from 'renderer/store/recipes-context';
import classes from './RecipeFilter.module.css';
import { RecipesContextObj } from 'renderer/store/recipes-context';

const RecipeFilter: React.FC = () => {
  const [filteredYear, setFilteredYear] = useState(null);

  const ctx = useContext<RecipesContextObj>(RecipesContext);
  const availableYears: number[] = [
    ...new Set(
      ctx.recipes.map((rec) => new Date(rec.date)).map((dt) => dt.getFullYear())
    ),
  ];
  availableYears.sort((a, b) => a - b);

  function onFilterHandler(e: React.BaseSyntheticEvent) {
    const year = e.target.textContent;
    setFilteredYear(year);
    ctx.applyYearFilter(year);
  }

  function onClearFilter() {
    setFilteredYear(null);
    ctx.removeYearFilter();
  }

  return (
    <section className={classes.filterContainer}>
      <div className={classes.filterButtons}>
        {availableYears.map((el, idx) => (
          <button
            key={idx}
            className={`${classes.filterBtn} ${
              el.toString() === filteredYear ? classes.active : classes.inactive
            }`}
            onClick={onFilterHandler}
          >
            {el}
          </button>
        ))}
        <button className={classes.btnClear} onClick={onClearFilter}>
          Clear
        </button>
      </div>
    </section>
  );
};

export default RecipeFilter;

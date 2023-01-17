import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import DUMMY_MEALS from './dummy-meals';
import MealItem from './MealItem';

console.log(DUMMY_MEALS);

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map(meal => {
            return (
              <MealItem
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import DUMMY_MEALS from './dummy-meals';

console.log(DUMMY_MEALS);

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {/* {DUMMY_MEALS.map(meal => {
            return (
              <li key={meal.id}>
                <h3>{meal.name}</h3>
                <p>{meal.description}</p>
                <p>{meal.price}</p>
              </li>
            );
          })} */}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

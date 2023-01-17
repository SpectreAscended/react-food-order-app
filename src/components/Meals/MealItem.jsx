import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <span className={classes.price}>${props.price.toFixed(2)}</span>
      </div>

      <MealItemForm />
    </li>
  );
};

export default MealItem;

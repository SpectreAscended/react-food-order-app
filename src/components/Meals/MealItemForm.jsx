import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input/Input';

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        htmlFor="form-input"
        id="form-input"
        type="number"
        min="1"
        step="1"
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

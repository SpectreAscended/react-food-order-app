import React from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      Your Cart
      <div className={classes.badge}>2</div>
    </button>
  );
};

export default HeaderCartButton;

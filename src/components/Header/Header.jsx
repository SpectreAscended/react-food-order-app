import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import bgImg from '../../Assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={bgImg} alt="Table with a variety of delicious foods." />
      </div>
    </>
  );
};

export default Header;

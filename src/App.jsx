import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/Meals/MealsSummary';
import AvailableMeals from './components/Meals/AvailableMeals';

const App = () => {
  return (
    <>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default App;

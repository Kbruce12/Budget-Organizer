import './index.css';
import Expenses from './components/Expenses/Expenses';
import React from 'react';

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 178.90,
      date: new Date(2020, 7, 14)
    },
    {
      title: 'Clothes',
      amount: 378.90,
      date: new Date(2021, 3, 24)
    },
    {
      title: 'Groceries',
      amount: 278.90,
      date: new Date(2021, 4, 4)
    },
    {
      title: 'Hydro',
      amount: 150.00,
      date: new Date(2022, 8, 18)
    }
  ]
  // return React.createElement('div', {}, 
  //        React.createElement('h2', {}, "Let's get Starter"),
  //        React.createElement(Expenses, {items: expenses})
  // );
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

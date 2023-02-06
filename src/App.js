import './index.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expense = [
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

  return (
    <div>
      <ExpenseItem
        id={expense[0].id} 
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        id={expense[1].id}  
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        id={expense[2].id} 
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date} 
      />
      <ExpenseItem
        id={expense[3].id} 
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;

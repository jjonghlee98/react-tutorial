import React from 'react';

import Card from '../UI/Card';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(expenseData);
  }
  return (
    <Card className="new-expense__card">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Card>
  )
}

export default NewExpense;
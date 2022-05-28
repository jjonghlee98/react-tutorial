import React, { useState } from 'react';

import Card from '../UI/Card';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const clickEditingHandler = () => {
    setIsEditing(true);
  }

  const clickCancleHandler =() => {
    setIsEditing(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  }

  return (
    <Card className="new-expense__card">
      {!isEditing && <button onClick={clickEditingHandler}>New Add Expense</button>}
      {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={clickCancleHandler}/>}
    </Card>
  )
}

export default NewExpense;
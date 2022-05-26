import React from 'react';

import Card from '../UI/Card';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  return (
    <Card className="new-expense__card">
      <NewExpenseForm />
    </Card>
  )
}

export default NewExpense;
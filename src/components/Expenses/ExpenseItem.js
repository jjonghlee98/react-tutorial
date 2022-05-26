import React from "react";

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!");
  }
  return (
    <Card className="expense-item">
      {/* 방법1.날자 포멧 메소드 props.date.toISOString */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={() => {console.log("Clicked!!")}}>Change Title</button> */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
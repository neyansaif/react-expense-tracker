import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
   if (props.item.length === 0) {
      return <h2 className="expenses-list__fallback">Content Not Found</h2>;
   }
   return (
      <ul className="expenses-list">
         {props.item.length > 0 &&
            props.item.map((expense) => {
               return (
                  <ExpenseItem
                     key={expense.id}
                     title={expense.title}
                     amount={expense.amount}
                     date={expense.date}
                  />
               );
            })}
      </ul>
   );
};

export default ExpensesList;

import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
   const [clicked, setClicked] = useState(false);
   const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
      setClicked(false);
   };

   const showFormHandler = () => {
      setClicked(true);
   };

   const closeFormHandler = () => {
      setClicked(false);
   };

   return (
      <div className="new-expense">
         {!clicked && (
            <button onClick={showFormHandler}>Add New Expense</button>
         )}
         {clicked && (
            <ExpenseForm
               onSaveExpenseData={saveExpenseDataHandler}
               closeFormHandler={closeFormHandler}
            />
         )}
      </div>
   );
};

export default NewExpense;

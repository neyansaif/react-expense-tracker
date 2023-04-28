import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState("2023");
   const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
   };

   const filteredExpenses = props.item.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
   });

   return (
      <li>
         <Card className="expenses">
            <ExpenseFilter
               selected={filteredYear}
               onFilterChange={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList item={filteredExpenses} />
         </Card>
      </li>
   );
};

export default Expenses;

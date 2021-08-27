import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpenseFilters";
import Card from "../UI/Card";

function ExpenseItems(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (filterDate) => {
    setFilteredYear(filterDate);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default ExpenseItems;

import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
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
  
  let expensesContent = <p>No Expenses Found</p>;
  if(filteredExpenses.length > 0)
  {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpenseItems;

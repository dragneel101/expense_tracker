import React, {useState} from 'react'

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilters";
import Card from "../UI/Card";

function ExpenseItems(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler=(filterDate)=>{
    setFilteredYear(filterDate);

  }

  return (
    
    <div>
      
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
}

export default ExpenseItems;

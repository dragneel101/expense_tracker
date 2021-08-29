import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNew, setAddNew] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddNew(false);
  };

  const addNewHandler = (event) => {
    setAddNew(true);
  };

  const cancelNewHandler = (event) => {
    setAddNew(false);
  };

  if (addNew === false) {
    return (
      <div className="new-expense">
        <button onClick={addNewHandler}> Add New Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={cancelNewHandler}
        ></ExpenseForm>
      </div>
    );
  }
};

export default NewExpense;

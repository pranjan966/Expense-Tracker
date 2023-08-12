import React, { useState } from "react";
import "./ExpenseForm.css";
import "./newUserExpence.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const[button,setButton]=useState("No Expense")
  // const [UserInput,SetUserInput]=useState({
  //     Enteredtitle: "",
  //     EnteredAmount:"",
  //     EnteredDate: "",

  // })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // SetUserInput((prevState)=> {
    //     return{...prevState, EnteredTitle:'event.target.value'}
    //     })
  };

  const AmountChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredAmount(value);
    // if(enteredAmount===0){
    //     setButton("Add Expence")
    // }
    // setEnteredAmount((prevState)=> {
    //         return{...prevState,EnteredAmount:'event.target.value'}
    //     })
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredDate((prevState)=> {
    //     return{...prevState,EnteredDate:'event.target.value'}
    //     })
  };
  const SubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense-controls">
        <div className=" new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input
            type="text"
            value={enteredTitle}
            className="new-expense__control input"
            onChange={titleChangeHandler}
          />
        </div>
        <div className=" new-expense__control ">
          <label className="new-expense__control label">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            className="new-expense__control input"
            min="0.01"
            step="0.01 "
            onChange={AmountChangeHandler}
          />
        </div>
        <div className=" new-expense__control ">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            value={enteredDate}
            className="new-expense__control input"
            min="2019-01-01"
            max="2022"
            onChange={DateChangeHandler}
          />
        </div>

        <div className="">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">
            {enteredAmount ? "Add " : "No "}Expenses
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;

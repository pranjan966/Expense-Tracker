import React ,{useState}from 'react';
import './newUserExpence.css'
import ExpenseForm from "./ExpenseForm";
const NewUserExpence = (props) => {
    const [isEditing ,setIsEditing] = useState(false)
    const saveExpenseDataHandler =(enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random.toString()
        }
        props.onAddExpence(expenseData);
        setIsEditing(false)

    };
     
    const startEdittingHandler= () =>{
        setIsEditing(true );
    };

    const stopEdittingHandeler=  ()=>{
        setIsEditing(false)
    }
    return (<div className='new-expense'>
        {!isEditing && <button onClick={startEdittingHandler}>Add new Expense </button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={stopEdittingHandeler}></ExpenseForm>}   </div>)
}
export default NewUserExpence;
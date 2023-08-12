import React,{useState} from 'react';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './NewExpence.css';
import ExpenseFilter from "../NewUserExpence/ExpenseFilter";
import ExpensesList from './ExpensesList';


function NewExpence(props) {
  const [filteredYear,setFilteredYear] = useState('2021')

  const changeFilterHandler = (selectedyear) =>{
    setFilteredYear(selectedyear)
    // console.log('newExpense.js'); 
    console.log(selectedyear)

  }
  const filteredExpenses=props.expenses.filter(expense => {
  return expense.date.getFullYear().toString()===filteredYear;
  });



  return (
    <>
    <Card ClassName="expence">
    
    <ExpenseFilter  selected={filteredYear} onChangeFilter={changeFilterHandler}></ExpenseFilter>
    <ExpensesChart expenses = {filteredExpenses}/>
    <ExpensesList items ={filteredExpenses}></ExpensesList>
    
    
    </Card>
    </>
      
   
  );
  }
export default NewExpence;
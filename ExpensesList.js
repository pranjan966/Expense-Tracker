import React from "react";
import "./ExpensesList.css"
import ExpenceItem from "./ExpenceItems";
const ExpensesList = props =>{
if(props.items.length === 0){
  return <h2 className="expenses-list__fallback">Found no expenses</h2>
}
return <ul>
{props.items.map((item,index,arr) => <ExpenceItem
  id={index}
  key={item.id}
  title={item.title}
  amount={item.amount}
  date={item.date}
></ExpenceItem>)}

</ul>
};
export default  ExpensesList;

import ExpenceDate from './ExpenceDate';
import './ExpenceItems.css';
import Card from '../UI/Card';
function ExpenceItem(props) {
  // const [title,setTitle]=useState(props.title)
  // function clickHandler(){
  //   setTitle("updated!!!");
  //   console.log('clicked');
  // } 

  const removeHandeler =(event) =>{
    console.log(event.date.getFullYear())
    console.log(props.arr)
  }

 
    return (
      <li>
        <Card className="expense-item">
        <ExpenceDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <div>
         {!props.amount && <button onClick={()=> removeHandeler(props)} value={`${props.title}`}>Removee</button>}
        </div>
        {/* <button onClick={clickHandler}>ChangeTitle</button> */}
    </Card>
      </li>
    ); 
};

export default ExpenceItem;
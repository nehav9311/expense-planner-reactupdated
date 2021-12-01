import { useCallback, useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //const [title,setTitle] = useState(props.title)

  // const clickHandler = () => {
  //   setTitle("New title")
  //   console.log(title)
  // }

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">Rs {props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </li>
  );
};

export default ExpenseItem;

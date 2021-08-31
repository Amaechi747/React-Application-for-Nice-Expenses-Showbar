import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import "./Expenses.css";
function Expenses(props){
    return(
        <div className = "expenses">
            <div className = "expense-item">
                <ExpenseDate date = {props.date[0]}/>
                <div className = "expense-item__description"><h2>{props.title[0]}</h2></div>
                <div className = "expense-item__price">${props.amount[0]}</div>
            </div>
            <div className = "expense-item">
                <ExpenseDate date = {props.date[1]}/>
                <div className = "expense-item__description"><h2>{props.title[1]}</h2></div>
                <div className = "expense-item__price">${props.amount[1]}</div>
            </div>
            <div className = "expense-item">
                <ExpenseDate date = {props.date[2]}/>
                <div className = "expense-item__description"><h2>{props.title[2]}</h2></div>
                <div className = "expense-item__price">${props.amount[2]}</div>
            </div>
            
    
            
        </div>
    )
}

export default  Expenses;
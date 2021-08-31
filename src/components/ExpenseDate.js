import './ExpenseDate.css'

const ExpenseDate = function(props){
    const day = props.date.toLocaleString('en-GB', {day: 'numeric'});
    const month = props.date.toLocaleString('en-GB', {month: 'long'});
    const year = props.date.toLocaleString('en-GB', {year: 'numeric'});
    return(
        <div className = "expense-date">
            <div className = "expense-date__month">{month}</div>
            <div className = "expense-date__year">{year}</div>
            <div className = "expense-date__day">{day}</div>
        </div>
    )
};

export default ExpenseDate;

import { useContext } from "react";
import { Expense } from "./ExpenseProvider";


function HistoryComponent({ text , amount }){
    const { transactions } = useContext(Expense);
    const sign = amount < 0 ? '-' : '+';
    return <>
        <div className={amount > 0 ? 'HistoryItemplus':'HistoryItemminus'}>
            <div className="item">{text}</div>
            <div className="itemcost" >{sign}₹{Math.abs(amount)}</div>
        </div>
    </>
}

export default HistoryComponent
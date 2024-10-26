
import { useContext } from "react";
import { Expense } from "./ExpenseProvider";


function HistoryComponent({ text , amount , id }){
    const { Delete } = useContext(Expense);
    const sign = amount < 0 ? '-' : '+';

    function deleteId(id){
        Delete(id);
    }
    return <>
        <div className={amount > 0 ? 'HistoryItemplus':'HistoryItemminus'}>
            <span className="delete"><button className="delete-btn" onClick={() => deleteId(id)}>X</button></span>
            <div className="item">{text}</div>
            <div className="itemcost" >{sign}₹{(Math.abs(amount)).toFixed(1)}</div>
        </div>
    </>
}

export default HistoryComponent
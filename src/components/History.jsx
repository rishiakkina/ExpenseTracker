import HistoryComponent from "./HistoryComponent";
import { Expense } from "./ExpenseProvider";
import { useContext } from "react";

function Income(){
    
    const { transactions } = useContext(Expense);
    return <>
        <div className="historyTitle">History</div>
        <div className="history">
            <ul>
                {transactions.map(transaction => <HistoryComponent key={transaction.id} id = {transaction.id} text = {transaction.text} amount = {transaction.amount}/>)}
            </ul>
        </div>
    </>
}

export default  Income;
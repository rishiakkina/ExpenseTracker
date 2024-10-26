import { useContext } from "react";
import { Expense } from "./ExpenseProvider";

function ExpenseTitle(){
    const { transactions } = useContext(Expense);
    const amounts = transactions.map( transaction => transaction.amount);
    const total = amounts.reduce((acc,item) => acc+=item,0)
    const sign = total < 0 ? '-' : '';
    return <>
            <div className="title">
                Expense Tracker
            </div>
            <div className="total">
                Your Balance
            </div>
            <div className="amount">
            {sign}₹{Math.abs(total)}
            </div>
        </>
}

export default ExpenseTitle;
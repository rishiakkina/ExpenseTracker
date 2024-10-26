
import { useContext } from "react";
import { Expense } from "./ExpenseProvider";

function IncomeExpense(){
    const { transactions } = useContext(Expense);
    const amounts = transactions.map(transaction => transaction.amount);
    const plus = amounts.filter(tran => tran>0).reduce((amount,item) => amount+=item,0);
    const minus = amounts.filter(tran => tran<0).reduce((amount,item) => amount+=item,0);
    return <>
        <div className="spend">
            <div className="income">
                <div className="income-spend">Income : </div>
                <div style={{color: "#2ecc71"}}>+₹{plus}</div>
            </div>
            <div className="expense">
                <div className="expense-spend">Expense :</div>
                <div style={{color : "#c0392b"}}>-₹{Math.abs(minus)}</div>
            </div>
        </div>
    </>
}

export default IncomeExpense;
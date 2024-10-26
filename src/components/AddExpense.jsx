
import { useContext,useState } from 'react';
import {Expense} from './ExpenseProvider'

function AddExpense(){
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    const { Add } = useContext(Expense);

    function submit(e){
        e.preventDefault();
        const newTransaction = {
            id : Date.now(),
            text : text,
            amount : +amount
        }
    
        Add(newTransaction);
    }

    return <>
        <div className="add" >Add Expense/Income</div>
        <input type="text" name="text" className="inputitem"  onChange={ e => setText(e.target.value)} placeholder="Ex Groceries" autoComplete='off'/>
        <div className="addspend">Cost</div>
        <input type="text" className="inputcost"onChange={e => setAmount(e.target.value)} placeholder="Ex ₹100 ( Add -ve for expense )"/>
        <button onClick={submit} className='btn'>Add</button>
    </>
}

export default AddExpense;
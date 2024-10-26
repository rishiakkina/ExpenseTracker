import { createContext, useContext , useReducer, useState } from "react"

const initialstate = {
    transactions : [{
        id : 3456,
        text : 'shopping',
        amount : -40
    },{
        id : 3240,
        text : 'salary',
        amount : 600
    }]
}
const Expense = createContext();

function ExpenseProvider({ children }){

    const [state,dispatch] = useReducer(reducer,initialstate);

    function reducer(state,action){
        switch (action.type){
            case 'add-expense':
                return {
                    ...state,
                    transactions : [action.payload,...state.transactions]
                }
            case 'delete-expense':
                return {
                    ...state,
                    transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
                }
            }
            
    }

    function Add(transaction){
        dispatch({
            type : 'add-expense',
            payload : transaction
        })
    }

    function Delete(id){
        dispatch({
            type : 'delete-expense',
            payload : id
        })
    }
    return (<>
        <Expense.Provider value={{
            transactions : state.transactions,
            Add,
            Delete
        }}>
            {children}
        </Expense.Provider>
    </>)
}

export { ExpenseProvider , Expense }
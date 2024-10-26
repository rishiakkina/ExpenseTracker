import React ,{ useState , useContext} from 'react'
import ExpenseTitle from './components/ExpenseTitle'
import IncomeExpense from './components/IncomeExpense'
import History from './components/History.jsx'
import AddExpense from './components/AddExpense.jsx'
import { ExpenseProvider } from './components/ExpenseProvider.jsx'

function App(){
  return (
    <ExpenseProvider>
      <ExpenseTitle />
      <IncomeExpense />
      <hr />
      <History />
      <hr/>
      <AddExpense />
    </ExpenseProvider>
  )
}

export default App;
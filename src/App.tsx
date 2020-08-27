import React, {useState} from 'react';
import TransactionIncomeExpense from "./Components/TransactionIncomeExpense";
import TransactionBalance from "./Components/TransactionBalance";
import TransactionHistory from "./Components/TransactionHistory";
import TransactionForm from "./Components/TransactionForm";

const App:React.FC = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            id:1,
            text:"Salary",
            amount:3000,
        },
        {
            id:2,
            text:"Food",
            amount:-600,
        },
        {
            id:3,
            text:"Computer Parts",
            amount:-1000,
        },
    ])

    const addTransaction = (newTransaction:Transaction) => {
            setTransactions([...transactions, newTransaction])
    }

    const deleteTransaction = (id:number) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }


    return (
        <div className="w-full max-w-xs m-auto py-10">
            <h1 className="text-center text-2xl font-bold">Expense Tracker </h1>
            <TransactionBalance transactions={transactions}  />
            <TransactionIncomeExpense transactions={transactions}/>
            <TransactionHistory deleteTransaction={deleteTransaction} transactions={transactions} />
            <TransactionForm addTransaction={addTransaction}/>
        </div>
    );
};

export default App;

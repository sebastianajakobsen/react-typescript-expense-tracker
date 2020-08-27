import React from 'react';
import TransactionItem from "./TransactionItem";

interface Props {
    transactions:Transaction[],
    deleteTransaction:(id:number) => void;
}

const TransactionHistory:React.FC<Props> = ({transactions,  deleteTransaction}) => {
    return (
        <div className="relative p-3">
            <h3 className="border-b-2 text-2xl font-medium mb-2 pb-2">History</h3>
            <ul>
            {
                transactions.map(transaction => (
                    <TransactionItem deleteTransaction={deleteTransaction} key={transaction.id} transaction={transaction}/>
                ))
            }
            </ul>
        </div>
    );
};

export default TransactionHistory;

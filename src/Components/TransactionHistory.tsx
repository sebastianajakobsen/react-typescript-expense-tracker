import React from 'react';
import TransactionItem from "./TransactionItem";

interface Props {
    transactions:Transaction[]
}

const TransactionHistory:React.FC<Props> = ({transactions}) => {
    return (
        <div>
            <h3 className="border-b-2 text-2xl font-medium mb-2 pb-2">History</h3>
            <ul>
            {
                transactions.map(transaction => (
                    <TransactionItem key={transaction.id} transaction={transaction}/>
                ))
            }
            </ul>
        </div>
    );
};

export default TransactionHistory;

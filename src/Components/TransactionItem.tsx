import React from 'react';

interface Props {
    transaction:Transaction
}

const TransactionItem:React.FC<Props> = ({transaction}) => {

    const sign = transaction.amount > 0 ? "+" : ""

    return (
            <li className={`bg-white shadow-md flex border-r-8 justify-between p-3 my-3 ${transaction.amount > 0 ? 'border-green-600' : 'border-red-600'}`}>
            {transaction.text} <span>{sign}{transaction.amount}</span>
            </li>
    );
};

export default TransactionItem;

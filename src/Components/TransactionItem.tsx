import React from 'react';

interface Props {
    transaction:Transaction,
    deleteTransaction:(id:number) => void;
}

const TransactionItem:React.FC<Props> = ({transaction, deleteTransaction}) => {

    const sign = transaction.amount > 0 ? "+" : ""

    const handleButtonClick = () => {
        deleteTransaction(transaction.id)
    }

    return (
            <li className={`bg-white shadow-md flex border-r-8 justify-between p-3 my-3 ${transaction.amount > 0 ? 'border-green-600' : 'border-red-600'}`}>
            {transaction.text} <span>{sign}{transaction.amount}</span> <button onClick={handleButtonClick} className="cursor-pointer text-red-600 absolute left-0 font-bold">x</button>
            </li>
    );
};

export default TransactionItem;

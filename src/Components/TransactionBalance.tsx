import React from 'react';

interface Props {
    transactions: Transaction[]
}

const TransactionBalance: React.FC<Props> = ({transactions}) => {

    const amounts = transactions.map(transactions => transactions.amount);
    const income = amounts.filter(function (a) { return a >= 0; }).reduce(function (a, b) { return a + b; }, 0);
    const expense = amounts.filter(function (a) { return a <= 0; }).reduce(function (a, b) { return a + b; }, 0);

    const balance = income - Math.abs(expense);



    return (
        <div>
            <h4 className="text-2xl font-medium">Your Balance</h4>
            <h1 className="text-3xl font-bold leading-none">${balance}</h1>
        </div>
    );
};

export default TransactionBalance;

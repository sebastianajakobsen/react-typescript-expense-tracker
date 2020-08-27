import React from 'react';

interface Props {
    transactions:Transaction[]
}

const TransactionIncomeExpense:React.FC<Props> = ({transactions}) => {

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(function (a) { return a >= 0; }).reduce(function (a, b) { return a + b; });
    const expense = amounts.filter(function (a) { return a <= 0; }).reduce(function (a, b) { return a + b; });


    return (
        <div className="flex justify-between p-6 bg-white shadow-md my-6 ">
            <div className="flex-1 text-center border-r-2 font-medium">
                <h4>Income</h4>
                <p className="text-green-600">${income}</p>
            </div>
            <div className="flex-1 text-center font-medium">
                <h4>Expense</h4>
                <p className="text-red-600">${expense}</p>
            </div>
        </div>
    );
};

export default TransactionIncomeExpense;

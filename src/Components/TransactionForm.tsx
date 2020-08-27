import React, {useState} from 'react';

interface Props {

}

const TransactionForm: React.FC<Props> = () => {

    const [newTransaction, setNewTransaction] = useState<Transaction>({
        id:1,
        text:"",
        amount:0
    })

    return (
        <div>
            <h3 className="border-b-2 text-2xl font-medium mb-2 pb-2">Add new transaction</h3>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
                    Text
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text" type="text" placeholder="Enter text..." />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Amount (negative - expense, positive - income)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount" type="text" placeholder="Enter amount..." />
            </div>

        </div>
    );
};

export default TransactionForm;

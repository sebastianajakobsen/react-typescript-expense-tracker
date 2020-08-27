import React, {useState} from 'react';

interface Props {
    addTransaction:(addTransaction:Transaction) => void;
}

const TransactionForm: React.FC<Props> = ({addTransaction}) => {

    const [newTransaction, setNewTransaction] = useState<Transaction>({
        id:1,
        text:"",
        amount:0
    })

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTransaction({...newTransaction, id: Math.floor(Math.random() * 100000)})
    }

    const handleInputTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTransaction({...newTransaction, text:e.target.value})
    }

    const handleInputAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTransaction({...newTransaction, amount:parseInt(e.target.value)})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="border-b-2 text-2xl font-medium mb-2 pb-2">Add new transaction</h3>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
                    Text
                </label>
                <input onChange={handleInputTextChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text" type="text" placeholder="Enter text..." />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                    Amount (negative - expense, positive - income)
                </label>
                <input onChange={handleInputAmountChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount" type="number" placeholder="Enter amount..." />
            </div>

            <button
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Add transaction
            </button>

        </form>
    );
};

export default TransactionForm;

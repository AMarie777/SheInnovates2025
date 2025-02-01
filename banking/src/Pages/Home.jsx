import './Home.css';
import data from "./Shelly_bank.json";
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [bank, setBank] = useState(null);
    const [transactions, setTransactions] = useState([]); 

    useEffect(() => {
        // Extract user bank details
        const bankData = data.bank_accounts.find(bank_account => bank_account.user_id === 1);
        setBank(bankData);

        // Extract all transactions for the user
        const transactionsData = data.transactions.filter(transaction => transaction.user_id === 1);
        setTransactions(transactionsData);
    }, []);

    return (
        <div className="home">
            <h1>Gabexa Bank</h1>
            <div className="message">
                <p>Gabexa Bank helps you track your spending and protect your finances with smart alerts.</p>
                <p>Spending Insights : Get notified when you're spending more than usual in certain categories (food, travel, shopping) so you can stay on budget.</p>
                <p>Subscription Protection : We detect recurring charges from the same merchant and alert you immediately. If it's unauthorized, you can contest it with just a tap.</p>
                <p>With Gabexa, you're always in control -- no more unexpected charges or hidden fees!</p>
            </div>

            {/* Ensure the bank balance is properly displayed */}
            <h2>Balance: {bank ? bank.balance : "Error retrieving balance"}</h2>
            <hr />
            <h3 className="purchase-history-header">Purchase History:</h3>

            {/* Display list of transactions */}
            <div className="transaction-list">
                {transactions.length > 0 ? (
                    transactions.map((transaction, index) => (
                        <div key={transaction.transaction_id} className="transaction-item">
                            <p><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</p>
                            <p><strong>Date:</strong> {new Date(transaction.transaction_date).toLocaleDateString()}</p>
                            <p><strong>Description:</strong> {transaction.description}</p>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>No transactions found.</p>
                )}
            </div>
        </div>
    );
}

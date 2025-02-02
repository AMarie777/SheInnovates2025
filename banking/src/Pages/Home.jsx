import './Home.css';
import data from "./Shelly_bank.json";
import React, { useState, useEffect } from 'react';

export default function Home() {
    const [bank, setBank] = useState(null);
    const [transactions, setTransactions] = useState([]); 

    useEffect(() => {
        //Extract user bank details
        const bankData = data.bank_accounts.find(bank_account => bank_account.user_id === 1);
        setBank(bankData);

        //Extract all transactions for the user
        const transactionsData = data.transactions.filter(transaction => transaction.user_id === 1);
        setTransactions(transactionsData);
    }, []);

    return (
        <div className="home">

            <div className="welcome_msg">
                <h1>Gabexa Bank</h1>
                <div className="message1"> <p>Gabexa Bank helps you track your spending and protect your finances with smart alerts. &#128519;</p> </div>
                <div className="features"> 
                    <span>
                        <h3>Spending Insights</h3>
                        Get notified when you're spending more than usual in certain categories (food, travel, shopping) so you can stay on budget.</span>
                    <span>
                        <h3>Subscription Protection</h3>
                        We detect recurring charges from the same merchant and alert you immediately. If it's unauthorized, you can contest it with just a tap.</span>
                </div>
                <div className="message2"><p>With Gabexa, you're always in control -- no more unexpected charges or hidden fees!</p></div>
            </div>
            
            <div className="transactions">
                <h1>Transaction History</h1>

            </div>

            {/*Ensure the bank balance is properly displayed*/}
            <h2>Balance: {bank ? bank.balance : "Error retrieving balance"}</h2>
            <hr />
        
            {/*Display list of transactions*/}
            <div className="transaction-list">
                {transactions.length > 0 ? (
                    <>
                    {/*Table Headers*/}
                    <div className="transaction-headers">
                        <span>Amount</span>
                        <span>Date</span>
                        <span>Description</span>
                        <span>Category</span>
                    </div>
                    <hr />

                    {/*Transaction Data*/}

                    {transactions.map((transaction, index) => (
                        <div key={transaction.transaction_id} className="transaction-item">
                            <span className="trans-amnt"> ${transaction.amount.toFixed(2)}</span>
                            <span className="trans-date">{new Date(transaction.transaction_date).toLocaleDateString()}</span>
                            <span className="trans-desc"> {transaction.description}</span>
                            {/*add className="trans-category"*/}
                        </div>
                    ))}
                    </>
                ) : (
                    <p>No transactions found.</p>
                )}
            </div>
        </div>
    );
}

/* Link component creates navigatable links to diff pages */
import './Home.css'
import React from 'react'
import data from "./Shelly_bank.json";
import React, { useState, useEffect } from 'react';

export default function Home() {
    return (
         /* to= : target_path */
         /* <nav> : set of navigation links */
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
        </div>
    )
}
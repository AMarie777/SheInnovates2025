/* Link component creates navigatable links to diff pages */
import './Home.css'
import React from 'react'

export default function Home() {
    return (
         /* to= : target_path */
         /* <nav> : set of navigation links */
        <div className="home">
            <h1>Gabexa Bank</h1>
            <div className="message">
                <p>Gabexa Bank helps you track your spending and protect your finances with smart alerts.</p>
                <p>Spending Insights : Get notified when you're spending more than usual in certain categories (food, travel, shopping) so you can stay on budget.</p>
                <p>Subscription Protection : We detect recurring charges from the same merchant and alert you immediately. If it's unauthorized, you can contest it with just a tap.</p>
                <p>With Gabexa, you're always in control -- no more unexpected charges or hidden fees!</p>
            </div>
        </div>
    )
}
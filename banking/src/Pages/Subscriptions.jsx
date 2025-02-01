import './Subscriptions.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Subscriptions() {

    //examples
    const subscriptions = [
        {
            name: 'Netflix',
            price: 7.99,
            charges: ['2024-01-01', '2024-02-01', '2024-03-01']
        },
        {
            name: 'Spotify',
            price: 1000.00,
            charges: ['2024-01-15', '2024-02-15', '2024-03-15']
        },
        {
            name: 'Adobe Creative Cloud',
            price: 0.01,
            charges: ['2024-01-20', '2024-02-20', '2024-03-20']
        }
    ];

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="subscriptions">
            <h1>Subscriptions</h1>
            <p>Track your monthly subscriptions.</p>

            {subscriptions.map((sub, index) => (
                <div key={index} className="subscription-item">

                    <div className="subscription-header" onClick={() => toggleExpand(index)}>
                        {/*span -- inline styling (similar to div)*/}
                        <span className="merchant">{sub.name}</span>
                        <span className="price">${sub.price.toFixed(2)}</span>
                    </div>

                    
                    {expanded === index && (
                        <div className="subscription-details">
                            
                            <ul>
                                {sub.charges.map((date, idx) => (
                                    <li key={idx}>{date}</li>
                                ))}
                            </ul>
                            <Link className="contest-button" to="./Contest">Do Not Recognize</Link>
                        </div>
                    )}
                </div>
            ))} 

        </div>
    )
}

import './Subscriptions.css'
import { Link } from 'react-router-dom';
import data from "./Shelly_bank.json";
import React, { useState, useEffect } from 'react';


    export default function Subscriptions() {
        const [subscriptions, setSubscriptions] = useState([]);
        const [expanded, setExpanded] = useState(null);
    
        useEffect(() => {
            if (data && data.subscriptions) {
                setSubscriptions(data.subscriptions);
            } else {
                console.error("Error: Data or subscriptions not found");
            }
        }, []);

  

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
                        <span className="description">{sub.description}</span>
                        <span className="price">${sub.amount ? Number(sub.amount).toFixed(2) : "0.00"}</span>
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

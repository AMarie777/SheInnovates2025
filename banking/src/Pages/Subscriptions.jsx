import './Subscriptions.css'
import { Link } from 'react-router-dom';
import data from "./Shelly_bank.json";
import React, { useState, useEffect } from 'react';


    export default function Subscriptions() {
        const [subscriptions, setSubscriptions] = useState([]);
        const [expanded, setExpanded] = useState(null);
    
        useEffect(() => {
            if (data && data.subscriptions) {
                const grouped = data.subscriptions.reduce((acc, sub) => {
                    const key = sub.description; 
                    if (!acc[key]) {
                        acc[key] = { ...sub, charges: [sub.charge_date] }; // Store first charge
                    } else {
                        acc[key].charges.push(sub.charge_date); // Add to existing subscription
                    }
                    return acc;
                }, {});
        
                setSubscriptions(Object.values(grouped));
            } else {
                console.error("Error: Data or subscriptions not found");
            }
        }, []);

  

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="subscriptions">
            <div className="header">
                <h1>Subscriptions &#128176;</h1>
                <h2>Track your monthly subscriptions</h2>
                <h2><i>Click on subscription to see charge history</i></h2>
            </div>

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



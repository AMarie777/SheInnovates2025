import './Profile.css'
import React, { useState, useEffect } from 'react';
import pfp from "./Shelby.png";
import data from "./Shelly_bank.json";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [card, setCard] = useState(null);

    useEffect(() => {
        // Extract user details
        const userData = data.users.find(user => user.user_id === 1);
        setUser(userData);

        // Extract card details
        const cardData = data.cards.find(card => card.user_id === 1);
        setCard(cardData);
    }, []);

    return (
        <div className="profile">
            <img src={pfp} width="300" height="300"></img>
            <h1>Your Profile</h1>
            <div className="profile-details">
            <p><b>Name:</b> {user ? user.name : "Error"}</p>
                <p><b>Email:</b>  {user ? user.email : "Error"} </p>
                <p><b>Phone:</b>  {user ? user.phone : "Error"} </p> 
            </div>
            <div className="card-details">
                <p><b>Card Number:</b>  {card ? card.card_number : "Error"} </p>
                <p><b>Card Type:</b> {card ? card.card_type : "Error"} </p>
                <p><b>Exp. Date:</b> {card ? card.expiration_date : "Error"} </p>
                <p><b>CVV:</b> {card ? card.cvv : "Error"} </p>
            </div>
        </div>
    )
}
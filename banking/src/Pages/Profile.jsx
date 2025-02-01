import './Profile.css'
import React from 'react'
import pfp from "./Shelby.png";

export default function Profile() {
    return (
        <div className="profile">
            <img src={pfp} alt="pfp" width="300" height="300"></img>
            <h1>Your Profile</h1>
            <div className="profile-details">
                <p>Name: </p>
                <p>Email: </p>
                <p>Phone: </p> 
            </div>
            <div className="card-details">
                <p>Card Number: </p>
                <p>Card Type: </p>
                <p>Exp. Date: </p>
                <p>CVV: </p>
            </div>
        </div>
    )
}
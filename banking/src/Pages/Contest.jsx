import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


export default function Contest() {
    const [contestedSub, setContestedSub] = useState(null);

    useEffect(() => {
        const storedSub = JSON.parse(localStorage.getItem("contestedSubscription"));
        if (storedSub) {
            setContestedSub(storedSub);

            //save to contested list
            const contestedSubs = JSON.parse(localStorage.getItem("contestedSubs")) || [];
            if (!contestedSubs.includes(storedSub.description)) {
                contestedSubs.push(storedSub.description);
                localStorage.setItem("contestedSubs", JSON.stringify(contestedSubs));
            }
        }
    }, []);

    return (
        <div className="contest">
            <div className="header">
                {contestedSub ? (
                <>
                    <h1>Charge Under Review</h1>
                    <p>Your request to contest <strong>{contestedSub.description}</strong> is being processed</p>
                    <p>Amount: <strong>${contestedSub.amount}</strong></p>
                    <h2>Please return back to subscriptions to see this change</h2>
                </>
            ) : (
                <p>No subscription found.</p>
            )}
                <Link className="subscription-button" to="/subscriptions">Back To Subscriptions</Link>
            </div>
        </div>
        )
}
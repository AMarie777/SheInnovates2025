import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo"> Gabexa</h1>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/subscriptions">Subscriptions</Link>
                <Link className="link" to="/trends">Trends</Link>
            </div>
        </nav>
    )
}
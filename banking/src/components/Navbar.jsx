import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./heart.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" width="130" height="200"></img>
            <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/subscriptions">Subscriptions</Link>
                <Link className="link" to="/trends">Trends</Link>
                <Link className="link" to="/profile">Profile</Link>
            </div>
        </nav>
    )
}
import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Brandon Holderman</h1>
            <div className="links">
                <Link to="/">Home</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
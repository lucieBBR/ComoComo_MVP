import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/getmeal">Get Meal</NavLink></li>
                <li><NavLink to="/myfavorites">My Favorites</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;

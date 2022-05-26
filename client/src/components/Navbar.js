import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/getmeal">Get Meal</NavLink></li>
            </ul>
            <NavLink to="/myfavorites">
                <button onClick={(e) => props.getFavoritesCb()} title="show favorites" type="button">My Favorites</button>
            </NavLink>
        </nav>
    );
}

export default Navbar;

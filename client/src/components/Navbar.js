import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
          {/* "Logo" */}
          <a className="navbar-brand" href="#navbarNav">¿Cómo Como?</a>
          {/* Hamburger Icon */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse justify-content-end me-auto" id="navbarNav"> 
            <ul className="navbar-nav justify-content-end">
                <li className="nav-item"><NavLink to="/" style={{ color: 'black', textDecoration: 'none'}}>Home</NavLink></li>
                <li className="nav-item"><NavLink to="/getmeal" style={{ color: 'black', textDecoration: 'none'}}>Get Meal</NavLink></li>
            </ul>
          {/* My Favorites button which leads the user to myfavorites page */}
            <NavLink to="/myfavorites">
                <button className="nav-item btn btn-light .text-nowrap" onClick={(e) => props.getFavoritesCb()} title="show favorites" type="button">My Favorites 💛</button>
            </NavLink>
        </div>
      </nav>
    );
}

export default Navbar;

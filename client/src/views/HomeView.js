import React from 'react';
import { Link } from 'react-router-dom';


function HomeView() {
    return (
        <div className="HomeView">
            <h2>WHAT'S IN MY FRIDGE?</h2>
            <p>Click on the fridge to insert ingredients and get your meal!</p>
            <Link to={'/getmeal'}>
                <img src="https://www.seekpng.com/png/detail/367-3677220_big-fridge-vector-refrigerator.png" alt="Big Fridge Vector - Refrigerator@seekpng.com"></img>
            </Link>
        </div>
    );
}

export default HomeView;
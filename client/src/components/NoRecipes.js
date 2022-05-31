import React from 'react';
import { Link } from 'react-router-dom';


function NoRecipes() {
    return (
        <div className="col text-center">
            <h3 className="pt-5" style={{ color: 'red' }}>No recipes with the inserted ingredients. Try again or go shopping!</h3>
            <p className="mt-5 fs-6">Make sure to insert the ingredients as comma separated values!</p>
            <Link to={'/getmeal'}>Go back to form</Link>
        </div>
    );
}

export default NoRecipes;
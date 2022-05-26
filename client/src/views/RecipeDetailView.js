import React from 'react';
import RecipeDetail from '../components/RecipeDetail';


function RecipeDetailView(props) {
    return (
        <div className="RecipeDetailView">
            <RecipeDetail recipes={props.recipes} />
        </div>
    );
}

export default RecipeDetailView;




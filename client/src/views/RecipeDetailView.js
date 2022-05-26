import React from 'react';
import RecipeDetail from '../components/RecipeDetail';


function RecipeDetailView(props) {
    return (
        <div className="RecipeDetailView">
            <RecipeDetail mainRecipe={props.mainRecipe} />
        </div>
    );
}

export default RecipeDetailView;




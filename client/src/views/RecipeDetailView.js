import React from 'react';
import RecipeDetail from '../components/RecipeDetail';


function RecipeDetailView(props) {

    return (
        <div className="RecipeDetailView">
            <RecipeDetail recipeInfo={props.recipeInfo} />
        </div>
    );
}

export default RecipeDetailView;




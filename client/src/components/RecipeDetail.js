import React from "react";
import "./RecipeDetail.css";
//import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Error404View from '../views/Error404View';

function RecipeDetail(props) {

   // let { id } = useParams();  // get recipe ID
    let recipe = props.recipeInfo
    //.find(r => r.id === Number(id));

    //Return 404 if recipe doesn't exist
    if (!recipe) {
        return <Error404View />;
    }

    return (
        <div className="RecipeDetail">
          <img src={recipe.image}
                 alt="image of the meal" />
          <div className="RecipeInfo">
            <h3> {recipe.title} </h3>
            <a href={recipe.sourceUrl} target="_blank">See recipe details</a>
            <button onClick={e => props.addToFavoritesCb(recipe)}>Add to Favorites</button>
          </div>
          <Link to="/recipes">Back to all recipes</Link>
        </div>
    );
}

export default RecipeDetail;


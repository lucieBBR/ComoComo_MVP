import React from "react";
import "./RecipeDetail.css";
import { Link, useParams } from 'react-router-dom';
import Error404View from '../views/Error404View';

function RecipeDetail(props) {

    let { id } = useParams();  // get recipe ID
    let recipe = props.recipes.find(r => r.id === Number(id));

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
            <p> {recipe.sourceUrl} </p> 
          </div>
          <Link to="/recipes">back</Link>
        </div>
    );
}

export default RecipeDetail;


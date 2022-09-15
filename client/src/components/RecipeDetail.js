import React, {useState} from "react";
import "./RecipeDetail.css";
import { Link } from 'react-router-dom';
import Error404View from '../views/Error404View';

function RecipeDetail(props) {
  
    let recipe = props.recipeInfo;

    return (
      <div className="RecipeDetail">
        
        <h2> {recipe.title} </h2>

        <div className="row">
          <div className="col text-center">
            {/* Recipe image */}
            <img src={recipe.image} alt="image of the meal" />
            <p></p>
            {/* Button Add to favorites - after click it calls the addToFavorites function which is adding the recipe to My Favorites page (the database ("favorites" table)); click is also causing redirection to /myfavorites page */}
            <Link to="/myfavorites">
            <button type="button" className="btn btn-light" onClick={(e) => props.addToFavoritesCb(recipe.id)} title="Add to favorites">Add to Favorites💛</button>
            </Link>
            <p></p>
            <Link to="/recipes"><button className="btn btn-primary m-2">Go to all recipes</button></Link>
          </div>

          {/* Recipe info */}
          <div className="col text-left ms-4">
            <h3>Info</h3>
              <h6>Minutes to prepare:</h6>
              <p>{recipe.readyInMinutes}</p>
              <h6>Servings:</h6> 
              <p>{recipe.servings}</p>
              <h6>Diets:</h6> 
              <ul>
                {recipe.diets.map(d =>
                  <li key={d.name}>{d}</li>)}
              </ul>
              <h6>Ingredients & Instructions:</h6> {recipe.analyzedInstructions[0].steps.map(s => {s.ingredients.map(i => i.name)})}

              {/* Link which redirect the user to the webpage with recipe details (external link) */}
              <a href={recipe.spoonacularSourceUrl} target="_blank"><button className="btn btn-primary m-2">See more details</button></a>
              
            </div>
          </div>
        
      </div>
    );
}

export default RecipeDetail;




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
            <img src={recipe.image} alt="image of the meal" />
            <p></p>
            <Link to="/myfavorites">
            <button type="button" className="btn btn-light" onClick={(e) => props.addToFavoritesCb(recipe.id)} title="Add to favorites">Add to Favorites💛</button>
            </Link>
            <p></p>
            <Link to="/recipes">Go to all recipes</Link>
          </div>
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
              {/* <h6>Ingredients: {recipe.analyzedInstructions[0].steps[0].ingredients.map(i => <p key={i.id}>{i.name}</p>)}</h6>
              <h6>Equipment: {recipe.analyzedInstructions[0].steps[0].equipment.map(e => <p key={e.id}>{e.name}</p>)}</h6>
              <h6>Instructions: {recipe.analyzedInstructions[0].steps[0].step}</h6> */}
              <h6>Ingredients & Instructions:</h6> {recipe.analyzedInstructions[0].steps.map(s => {s.ingredients.map(i => i.name)})}
              {/* <h6>Equipment: {recipe.analyzedInstructions[0].steps[0].equipment.map(e => <p key={e.id}>{.name}</p>)}</h6>
              <h6>Instructions: {recipe.analyzedInstructions[0].steps[0].step}</h6> */}
              <a href={recipe.sourceUrl} target="_blank">See more here</a>
              
            </div>
          </div>
        
      </div>
    );
}

export default RecipeDetail;




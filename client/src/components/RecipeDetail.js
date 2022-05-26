import React from "react";
import "./RecipeDetail.css";

function RecipeDetail(props) {
  let m = props.mainRecipe;
  return (
    <div className="RecipeDetail">
            <img src={m.image}
                 alt="image of the meal" />
        <div className="RecipeInfo">
            <h3> {m.title} </h3>
            <p> {m.sourceUrl} </p> 
        </div>
    </div>   
  )
}

export default RecipeDetail;


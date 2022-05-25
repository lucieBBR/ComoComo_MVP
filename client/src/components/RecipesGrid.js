import React from "react";
import "./RecipesGrid.css";

function RecipesGrid(props) {
  
    return (
        
      <div className="RecipesGrid">
          {
                props.recipes.map(r => (
                    <img key={r.id}
                    src={r.image}
                    alt="image with the meal"
                    onClick={(e) => props.showSelectedRecipeCb(r.id)}
                    />  
                ))
            }     
      </div>
    );
  }

export default RecipesGrid;


{/* <p>{w.weather[0].description}</p> */}
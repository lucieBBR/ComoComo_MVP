import React from "react";
import "./RecipesGrid.css";

function RecipesGrid(props) {
  
    return (
        
      <div className="RecipesGrid">
          {
                props.recipes.map(r => (
                  <figure >
                    <img key={r.id}
                    id={r.id}
                    src={r.image}
                    alt="image of the meal"
                    onClick={(e) => props.showMainRecipeCb(r.id)}
                    />  
                <figcaption>{r.title}</figcaption>
                </figure>
                )) 
            }     
      </div>
    );
  }

export default RecipesGrid;
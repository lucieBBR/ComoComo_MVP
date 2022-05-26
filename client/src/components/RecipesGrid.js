import React from "react";
import "./RecipesGrid.css";
import { Link } from 'react-router-dom';

function RecipesGrid(props) {
  
    return (
        
      <div className="RecipesGrid">
          {
                props.recipes.map(r => (
                  <figure key = {r.id} >
                    <Link to={'/recipes/'+r.id}>
                      <img key={r.id}
                            id={r.id}
                            src={r.image}
                            alt="image of the meal"
                      />  
                    </Link>
                    <figcaption>{r.title}</figcaption>
                </figure>
                )) 
            }     
      </div>
    );
  }

export default RecipesGrid;
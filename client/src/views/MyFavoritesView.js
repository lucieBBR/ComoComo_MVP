import React from "react";
import "./MyFavoritesView.css";
import { Link } from 'react-router-dom';

function MyFavoritesView(props) {
    //console.log(props.myFavorites)
    return (
        <div className="MyFavoritesView">
                      {
                props.myFavorites.map(f => (
                  <figure key = {f.recipe_id} >
                    <Link to={'/recipes/'+f.recipe_id}>
                      <img key={f.recipe_id}
                            id={f.recipe_id}
                            src={f.recipe_img}
                            alt="image of the meal"
                            onClick={(e) => props.getRecipeInfoCb(f.recipe_id)}/>  
                    </Link>
                    <figcaption>
                        {f.recipe_title}
                        <button onClick={(e) => props.deleteFromFavoritesCb(f.recipe_id)} title="delete" type="button">Delete</button> 
                    </figcaption> 
                </figure>
                
                )) 
            }  
        </div>
    );
}

export default MyFavoritesView;
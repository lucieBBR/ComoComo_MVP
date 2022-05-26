import React from "react";
import "./MyFavoritesView.css";
import { Link } from 'react-router-dom';

function MyFavoritesView(props) {
    return (
        <div className="MyFavoritesView">
                      {
                props.myFavorites.map(f => (
                  <figure key = {f.id} >
                    <Link to={'/recipes/'+f.id}>
                      <img key={f.id}
                            id={f.id}
                            src={f.image}
                            alt="image of the meal"
                            onClick={(e) => props.getRecipeInfoCb(f.id)}/>  
                    </Link>
                    <figcaption>
                        {f.title}
                        <button onClick={(e) => props.deleteFromFavoritesCb(f.id)} title="delete" type="button">Delete</button> 
                    </figcaption> 
                </figure>
                
                )) 
            }  
        </div>
    );
}

export default MyFavoritesView;
import React from "react";
import "./MyFavoritesView.css";
import { Link } from 'react-router-dom';

function MyFavoritesView(props) {
    //console.log(props.myFavorites)
    return (
        <div className="MyFavoritesView">
          <h2>MY FAVORITES</h2>
          <div className="row">
        {props.myFavorites.map(f => (
          
            <div className="col-sm-6 col-lg-3 mb-3 d-flex justify-content-evenly">
              <div className="card ms-2">
                    <img className="card-img-top"
                          key={f.recipe_id}
                          id={f.recipe_id}
                          src={f.recipe_img}
                          alt="image of the meal"/>  
                  <div className="card-body">
                                <h5 className="card-title">{f.recipe_title}</h5>
                  </div>
                  <div className="card-footer">
                                <Link to={'/recipes/'+f.recipe_id}>
                                <button className="btn btn-outline-primary me-3" onClick={(e) => props.getRecipeInfoCb(f.recipe_id)}>See detail</button>  
                                </Link>
                                <button className="btn btn-outline-warning float-right" onClick={(e) => props.deleteFromFavoritesCb(f.recipe_id)} title="delete" type="button">Delete</button> 
                  </div>
               </div>
            </div>
              )) 
        }
        </div>               
        </div>
    );
}
 
export default MyFavoritesView;
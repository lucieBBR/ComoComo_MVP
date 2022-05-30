import React from "react";
import { Link } from 'react-router-dom';

function RecipesGrid(props) {

  return (
        
    <div className="RecipesGrid">
      <h2>RECIPES</h2>
      <div className="row">
        {props.recipes.map(r => (
          
            <div className="col-sm-6 col-lg-3 mb-3 d-flex justify-content-evenly" key={r.id}>
              <div className="card ms-2 text-center">
                    <img className="card-img-top"
                          key={r.id}
                          id={r.id}
                          src={r.image}
                          alt="image of the meal"/>  
                  <div className="card-body">
                                <h5 className="card-title">{r.title}</h5>
                                <p className="card-text">Ingredients from your fridge used in this recipe: {r.usedIngredientCount}</p>
                                <p className="card-text">Missing ingredients: {r.missedIngredientCount}</p>
                  </div>
                  <div className="card-footer">
                                <Link to={'/recipes/'+r.id}>
                                <button className="btn btn-outline-primary" onClick={(e) => props.getRecipeInfoCb(r.id)}>See detail</button>  
                                </Link>
                  
                  </div>
               </div>
            </div>
              )) 
        }
        </div>     
     </div>

  );
  
    // return (
        
    //   <div className="RecipesGrid">
    //       {
    //             props.recipes.map(r => (
    //               <figure key = {r.id} >
    //                 <Link to={'/recipes/'+r.id}>
    //                   <img key={r.id}
    //                         id={r.id}
    //                         src={r.image}
    //                         alt="image of the meal"
    //                         onClick={(e) => props.getRecipeInfoCb(r.id)}
    //                   />  
    //                 </Link>
    //                 <figcaption>{r.title}</figcaption>
    //             </figure>
    //             )) 
    //         }     
    //   </div>
    // );
  }

export default RecipesGrid;
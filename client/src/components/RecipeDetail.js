import React, {useState} from "react";
import "./RecipeDetail.css";
//import { Link, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Error404View from '../views/Error404View';

function RecipeDetail(props) {
//  const [favs, setFavs] = useState({
//    recipe_id: null,
//    recipe_title: "",
//    recipe_img: ""
//  })
  
    let recipe = props.recipeInfo
     console.log(recipe)
    

    // function handleSubmit (event) {
    //   setFavs({
    //     recipe_id: recipe.id,
    //     recipe_title: recipe.title,
    //     recipe_img: recipe.img
    //   })
    //   props.addToFavoritesCb(favs);
    // }

    return (
        <div className="RecipeDetail">
            <img
             src={recipe.image}
                  alt="image of the meal" />
            <div className="RecipeInfo">
              <h3> {recipe.title} </h3>
              <a href={recipe.sourceUrl} target="_blank">See recipe details</a>
              <button onClick={(e) => props.addToFavoritesCb(recipe.id)} title="add to favorites" type="button">Add to Favorites</button>
            </div>
          <Link to="/recipes">Go to all recipes</Link>
          <Link to="/myfavorites">Go to Favorites</Link>
        </div>
    );
}

export default RecipeDetail;


import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import GetMealView from './views/GetMealView';
import GridView from './views/GridView';
import RecipeDetailView from './views/RecipeDetailView';
import MyFavoritesView from './views/MyFavoritesView';
import Error404View from './views/Error404View';

let BASE_URL = `https://api.spoonacular.com/recipes`;
// let API_KEY = `ef7382616fd34387b5452aad26f6b702`;
let API_KEY = `026462ab04b24ffd93b267a6542ced49`;

function App() {
    const [recipes, setRecipes] = useState([]);
    const [recipeInfo, setRecipeInfo] = useState(null);
    const [myFavorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState("");
  
// calling Spoonacular API to get recipes based on ingredients from input
    async function getRecipes(ingredients) {
      setError("");
      setRecipes(null);
  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
       }

      let url = `${BASE_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=5&ranking=1&ignorePantry=true`

      try {
        let response = await fetch(url, options);
        if (response.ok) {
          let data = await response.json();
          setRecipes(data);
        } else {
          setError(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        setError(`Network error: ${err.message}`);
      }
      navigate('/recipes');  // redirect to /recipes
    }


// calling Spoonacular API to get info about one recipe based on its id (after click on See detail in RecipesGrid or in MyFavoritesView)
    async function getRecipeInfo(id) {
      setError("");
      setRecipeInfo(null);
  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
       }

      let url = `${BASE_URL}/${id}/information?apiKey=${API_KEY}`

      try {
        let response = await fetch(url, options);
        if (response.ok) {
          let data = await response.json();
          setRecipeInfo(data);
        } else {
          setError(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        setError(`Network error: ${err.message}`);
      }
    
    }


// POST method to add recipe to my sql database ("favorites" sql table) after click on Add to Favorites in the RecipeDetailView
    async function addToFavorites(id) { 

      let myFavRecipe = {
        recipe_id: id,
        recipe_title: recipeInfo.title,
        recipe_img: recipeInfo.image,
      }
      
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(myFavRecipe)
      };
  
      try {
        let response = await fetch("/favorites", options); //post the new recipe to my favorites ("favories" sql table)
        console.log(options)
        if (response.ok) {
          let data = await response.json();
          setFavorites(data);
        } else {
          console.log(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        console.log(`Network error: ${err.message}`);
      }
    }

    useEffect(() => {
      getFavorites();  
  }, []);


// GET method to show all the favorites from my "favorites" sql table after clicking on My Favorites (MyFavoritesView)
    async function getFavorites() {
      try {
          let response = await fetch('/favorites'); //get all favorites
          if (response.ok) {
              let favorites = await response.json();
              setFavorites(favorites);
          } else {
              console.log(`Server error: ${response.status} ${response.statusText}`);
          }
      } catch (err) {
          console.log(`Server error: ${err.message}`);
      }
  }


  // DELETE method to delete recipe from "favorites" table & "MyFavoritesView" after clicking on Delete in My Favorites (MyFavoritesView)
  async function deleteFromFavorites(id) {
    let options = {
        method: 'DELETE'
    };

    try {
        let response = await fetch(`/favorites/${id}`, options);  // delete the recipe with the given id
        if (response.ok) {
            let favorites = await response.json();
            setFavorites(favorites); 
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
}

    return (
        <div className="App">
            <Navbar getFavoritesCb={getFavorites}/>

          <div className="container-fluid">

            {/* Routes to other Views of the app */}
            <Routes>
                {/* Route to HomeView */}
                <Route path="/" element={<HomeView />} />
                {/* Route to GetMealView with the IngredientsForm component*/}
                <Route path="getmeal" element={<GetMealView getRecipesCb={getRecipes}/>} />
                {/* Route to GridView with the RecipesGrid component*/}
                <Route path="recipes" element={<GridView recipes={recipes} getRecipeInfoCb={getRecipeInfo} />} />
                {/* Route to RecipeDetailView with the RecipeDetail component*/}
                <Route path="recipes/:id"element={<RecipeDetailView recipeInfo={recipeInfo} addToFavoritesCb={addToFavorites}/>} />
                {/* Route to MyFavoritesView*/}
                <Route path="myfavorites" element={<MyFavoritesView myFavorites={myFavorites} deleteFromFavoritesCb={deleteFromFavorites} getRecipeInfoCb={getRecipeInfo}/>} />
                {/* Route to ErrorView in case the users types invalid url */}
                <Route path="*" element={<Error404View />} />
            </Routes>

            {/* Show error message in case there is a problem with the fetch  */}
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
         
          </div>
        </div>
    );
}

export default App;
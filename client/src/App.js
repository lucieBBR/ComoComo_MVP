import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import GetMealView from './views/GetMealView'; //FormView
import GridView from './views/GridView';
import RecipeDetailView from './views/RecipeDetailView';
import MyFavoritesView from './views/MyFavoritesView';
//import Error404View from './views/Error404View';

let BASE_URL = `https://api.spoonacular.com/recipes`;
let API_KEY = `026462ab04b24ffd93b267a6542ced49`

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

      let url = `${BASE_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredients}&number=3&ranking=1&ignorePantry=true`

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

// calling Spoonacular API to get info about one recipe based on its id (after click)
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

// POST method to add recipe to my sql database ("favorites" table)
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
        let response = await fetch("/favorites", options);
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
      // navigate('/myfavorites'); 
    }

    useEffect(() => {
      getFavorites();  
  }, []);

// GET method to show all the favorites from my "favorites" sql table
    async function getFavorites() {
      try {
          let response = await fetch('/favorites'); 
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

  // DELETE method to delete recipe from "favorites" table & "MyFavoritesView"
  async function deleteFromFavorites(id) {
    let options = {
        method: 'DELETE'
    };

    try {
        let response = await fetch(`/favorites/${id}`, options);  // do DELETE
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
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="getmeal" element={<GetMealView getRecipesCb={getRecipes}/>} />
                <Route path="recipes" element={<GridView recipes={recipes} getRecipeInfoCb={getRecipeInfo} />} />
                <Route path="recipes/:id"element={<RecipeDetailView recipeInfo={recipeInfo} addToFavoritesCb={addToFavorites}/>} />
                <Route path="myfavorites" element={<MyFavoritesView myFavorites={myFavorites} deleteFromFavoritesCb={deleteFromFavorites} getRecipeInfoCb={getRecipeInfo}/>} />
                {/* <Route path="*" element={<Error404View />} /> */}
            </Routes>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
          </div>
        </div>
    );
}

export default App;
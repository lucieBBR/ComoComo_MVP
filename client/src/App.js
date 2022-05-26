import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import GetMealView from './views/GetMealView'; //FormView
import GridView from './views/GridView';
import RecipeDetailView from './views/RecipeDetailView';
import MyFavoritesView from './views/MyFavoritesView';
import Error404View from './views/Error404View';

let BASE_URL = `https://api.spoonacular.com/recipes`;

function App() {
    const [recipes, setRecipes] = useState([]);
    const [recipeInfo, setRecipeInfo] = useState(null);
    const [myFavorites, setFavorites] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState("");


    async function getRecipes(ingredients) {
      // call Spoonacular API
      setError("");
      setRecipes(null);
  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
       }

      let url = `${BASE_URL}/findByIngredients?apiKey=026462ab04b24ffd93b267a6542ced49&ingredients=${ingredients}&number=3&ranking=2&ignorePantry=true`
  
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


    async function getRecipeInfo(id) {
      // call Spoonacular API
      setError("");
      setRecipeInfo(null);
  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
       }

      let url = `${BASE_URL}/${id}/information?apiKey=026462ab04b24ffd93b267a6542ced49&`
      
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

    async function addToFavorites(recipe) { //or id?
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe) //what to include to parameter?
      };
  
      try {
        let response = await fetch("/favorites", options); //??? which link - is /api/favorites leading to my sql table?
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
          <h1>Como Como</h1>
            <Navbar getFavoritesCb={getFavorites}/>
            
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="getmeal" element={<GetMealView getRecipesCb={getRecipes}/>} />
                <Route path="recipes" element={<GridView recipes={recipes} getRecipeInfoCb={getRecipeInfo}/>} />
                <Route path="recipes/:id"element={<RecipeDetailView recipeInfo={recipeInfo} addToFavoritesCb={addToFavorites}/>} />
                <Route path="myfavorites" element={<MyFavoritesView myFavorites={myFavorites} deleteFromFavoritesCb={deleteFromFavorites}/>} />
                <Route path="*" element={<Error404View />} />
            </Routes>

            {/* {error && <h2 style={{ color: "red" }}>{error}</h2>} */}

        </div>
    );
}

export default App;
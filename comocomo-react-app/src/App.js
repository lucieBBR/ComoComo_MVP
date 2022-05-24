import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import GetMealView from './views/GetMealView'; //FormView
import GridView from './views/GridView';
// import RecipeDetailView from './views/RecipeDetailView';
// import MyFavoritesView from './views/MyFavoritesView';
import Error404View from './views/Error404View';

let BASE_URL = `https://api.spoonacular.com/recipes`;

function App() {
    const [recipes, setRecipes] = useState("");
    const navigate = useNavigate();
    // const [mainRecipe, setMainRecipe] = useState(null);
    const [error, setError] = useState("");


    async function getRecipes(ingredients) {
      // call Spoonacular API
      setError("");
      setRecipes(null);
  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '026462ab04b24ffd93b267a6542ced49'
        }
      };
      let url = `${BASE_URL}findByIngredients?ingredients=${ingredients}&number=100&ranking=2&ignorePantry=true`
  
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

    // function showSelectedRecipe() {
    // };

    return (
        <div className="App">
          <h1>Como Como</h1>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="getmeal" element={<GetMealView getRecipesCb={getRecipes}/>} />
                <Route path="recipes" element={<GridView recipes={recipes}  />} />
                {/* <Route path="selectedrecipe" element={<RecipeDetailView mainRecipe={mainRecipe} showSelectedRecipeCb={showSelectedRecipe}  />} /> */}
                {/* <Route path="myfavorites" element={<MyFavoritesView />} /> */}
                <Route path="*" element={<Error404View />} />
            </Routes>

            {error && <h2 style={{ color: "red" }}>{error}</h2>}

        </div>
    );
}

export default App;
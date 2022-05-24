import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import GetMealView from './views/GetMealView'; //FormView
import GridView from './views/GridView';
import MyFavoritesView from './views/MyFavoritesView';
import Error404View from './views/Error404View';


function App() {
    const [recipes, setRecipes] = useState("");
    const navigate = useNavigate();

    function getRecipes(ingredients) {
        navigate('/recipes');  // redirect to /recipes
    }

    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="getmeal" element={<GetMealView />} />
                <Route path="recipes" element={<GridView />} />
                <Route path="myfavorites" element={<MyFavoritesView />} />
                <Route path="*" element={<Error404View />} />
            </Routes>
        </div>
    );
}

export default App;
import React from 'react';
import IngredientsForm from '../components/IngredientsForm';


function GetMealView(props) {
    return (
        <div className="GetMealView">
            <IngredientsForm getRecipesCb={props.getRecipesCb} />
        </div>
    );
}

export default GetMealView;


        
            
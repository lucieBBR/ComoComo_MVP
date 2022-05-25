import React from 'react';
import RecipesGrid from '../components/RecipesGrid';


function GridView(props) {
    return (
        <div className="GridView">
            <RecipesGrid recipes={props.recipes} />
        </div>
    );
}

export default GridView;

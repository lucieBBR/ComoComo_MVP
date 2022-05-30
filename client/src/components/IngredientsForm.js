import React, { useState } from "react";
import "./IngredientsForm.css";


function IngredientsForm(props) {
  const [ingredients, setIngredients] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.getRecipesCb(ingredients);
    setIngredients("");
  }

  function handleChange(event) {
    setIngredients(event.target.value);
  }

  return (
    <div className="col">
      <form onSubmit={handleSubmit} className="IngredientsForm">
        <label>WHAT'S IN MY FRIDGE?
          <input
            type="text"
            value={ingredients}
            onChange={handleChange}
            placeholder="type ingredients separated by comma (e.g. tomatoes,egg)"
          />
        </label>
        <button type="submit" className="btn btn-primary">Get Meal</button>  
      </form>
    </div>
  );
}

export default IngredientsForm;

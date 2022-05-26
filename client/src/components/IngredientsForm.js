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
    <form onSubmit={handleSubmit} className="IngredientsForm">
      <input
        type="text"
        value={ingredients}
        onChange={handleChange}
        placeholder="type ingredients separated by comma (e.g. tomatoes,egg)"
      />
      
      <button type="submit">Get Meal</button>
     
    </form>
  );
}

export default IngredientsForm;

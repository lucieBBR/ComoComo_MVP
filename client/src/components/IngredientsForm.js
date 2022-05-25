import React, { useState } from "react";
import "./IngredientsForm.css";


const INIT_STATE = {
  ingredients: ""
};

function IngredientsForm(props) {
  const [input, setInput] = useState(INIT_STATE);

  function handleSubmit(event) {
    event.preventDefault();
    props.getRecipesCb(input);
    setInput(INIT_STATE);
  }

  function handleChange(event) {
      let { name, value } = event.target
      setInput(input => ({
          ...input,
          [name]: value
      }))
  }

  return (
    <form onSubmit={handleSubmit} className="LocationForm">
      <input
        type="text"
        name="ingredients"
        value={input.ingredients}
        onChange={handleChange}
        placeholder="type ingredients separated by comma (e.g. tomatoes,egg)"
      />
      
      <button type="submit">Get Meal</button>
     
    </form>
  );
}

export default IngredientsForm;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [current, setCurrent] = useState({
    label: "",
    images: "",
    ingredients: [],
  });

  const key = "0682d733664b0f3c2729c065b6c1acee";
  const id = "c40bf89b";

  useEffect(() => {
    showRecipes("beef");
  }, []);

  const showRecipes = (recipe) => {
    fetch(
      `https://api.edamam.com/search?q=${recipe}&app_id=${id}&app_key=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.hits.map((el) => el.recipe));
      })
      .catch((err) => {
        alert("No results requested");
        console.log(err);
      });
  };

  const displayRecipe = (label, image, ingredients) => {
    setCurrent({
      label: label,
      image: image,
      ingredients: ingredients,
    });
  };

  return (
    <div>
      <Header />
      <Search showRecipes={showRecipes} />
      <RecipeList recipes={recipes} displayRecipe={displayRecipe} />
      <Modal current={current} />
    </div>
  );
}

export default App;

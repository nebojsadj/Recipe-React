import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [current, setCurrent] = useState({
    name: "",
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

        if (data.hits.length === 0) {
          alert("Sorry the requested result does not exist");
        }
      })
      .catch((err) => console.log(err));
  };

  const displayRecipe = (name, image, ingredients) => {
    setCurrent({
      name: name,
      image: image,
      ingredients: ingredients,
    });
  };

  return (
    <div>
      <Header />
      <Search showRecipes={showRecipes} />
      <RecipeList recipes={recipes} displayRecipe={displayRecipe} />
      <Modal
        name={current.name}
        image={current.image}
        ingredients={current.ingredients}
      />
    </div>
  );
}

export default App;

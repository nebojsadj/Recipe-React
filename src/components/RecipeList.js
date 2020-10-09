import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, displayRecipe }) {
  const allRecipes = recipes.map((recipe, index) => (
    <div className="col-6 mt-4" key={index}>
      <Recipe
        name={recipe.label}
        image={recipe.image}
        ingredients={recipe.ingredients}
        digest={recipe.digest}
        calories={recipe.calories}
        weight={recipe.totalWeight}
        displayRecipe={displayRecipe}
      />
    </div>
  ));
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">{allRecipes}</div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;

import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, displayRecipe }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {recipes.map((recipe, index) => (
              <div className="col-6 mt-4" key={index}>
                <Recipe recipe={recipe} displayRecipe={displayRecipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;

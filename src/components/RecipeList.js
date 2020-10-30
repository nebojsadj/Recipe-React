import React from "react";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {recipes.map((recipe, index) => (
              <div className="col-6 mt-4" key={index}>
                <Recipe recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeList;

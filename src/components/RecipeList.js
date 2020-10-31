import React from "react";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";

function RecipeList() {
  const loading = useSelector((state) => state.recipes.loading);
  const recipes = useSelector((state) => state.recipes.recipes);
  const error = useSelector((state) => state.recipes.error);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            {(loading && (
              <div className="col-4 offset-4">
                <h1 className="text">Loading...</h1>
              </div>
            )) ||
              (error && (
                <div className="col-4 offset-4">
                  <h1 className="text">{error}</h1>
                </div>
              )) ||
              recipes.map((recipe, index) => (
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

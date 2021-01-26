import React from "react";
import Recipe from "./Recipe";
import { useSelector } from "react-redux";

function RecipeList() {
  const loading = useSelector((state) => state.recipes.loading);
  const recipes = useSelector((state) => state.recipes.recipes);
  const error = useSelector((state) => state.recipes.error);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row d-flex justify-content-around">
            {(loading && (
              <div className="d-flex justify-content-center">
                <h3 className="text-light">Loading...</h3>
              </div>
            )) ||
              (error && (
                <div className="d-flex justify-content-center">
                  <h1 className="text-light">{error}</h1>
                </div>
              )) ||
              recipes.map((recipe, index) => (
                <div className=" mt-4" key={index}>
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

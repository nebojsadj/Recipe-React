import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_recipes } from "./redux/actions";

function Search() {
  const [recipes, setRecipes] = useState("");
  const error = useSelector((state) => state.recipes.error);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="input-group">
            <input
              onChange={(e) => setRecipes(e.target.value)}
              value={recipes}
              type="text"
              placeholder="search"
              className="form-control text-center"
            />
            <button
              disabled={!recipes}
              onClick={() => {
                dispatch(fetch_recipes(recipes));
                setRecipes("");
                console.log(error);
              }}
              className="btn btn-primary"
            >
              Search ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

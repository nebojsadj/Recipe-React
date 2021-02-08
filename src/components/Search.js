import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetch_recipes } from "../redux/actions";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [recipes, setRecipes] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="input-group">
            <input
              onChange={(e) => setRecipes(e.target.value)}
              value={recipes}
              type="text"
              placeholder="search recipes"
              className="form-control text-center"
            />
            <button
              disabled={!recipes}
              onClick={() => {
                dispatch(fetch_recipes(recipes));
                setRecipes("");
              }}
              className="btn btn-primary"
            >
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

import React, { useState } from "react";

function Search({ showRecipes }) {
  const [state, setState] = useState("");
  const searchRecipes = () => {
    if (state === "") {
      alert("Please enter your search text!");
    } else {
      showRecipes(state);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="input-group">
            <input
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="search"
              className="form-control text-center"
            />
            <button onClick={searchRecipes} className="btn btn-primary">
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

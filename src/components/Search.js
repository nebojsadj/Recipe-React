import React, { useState } from "react";

function Search({ showRecipes }) {
  const [state, setState] = useState("");

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 offset-2">
          <div className="input-group">
            <input
              onChange={(e) => setState(e.target.value)}
              value={state}
              type="text"
              placeholder="search"
              className="form-control text-center"
            />
            <button
              disabled={!state}
              onClick={() => {
                showRecipes(state);
                setState("");
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

import React from "react";

function Recipe({ recipe, displayRecipe }) {
  const { label, image, ingredients, weight, digest, calories } = recipe;

  return (
    <div className="card bg">
      <div className="card-header">
        <h2 className=" text-center text-primary">{label}</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <img src={image} alt="" className="imgs" />
          </div>
          <div className="col-6">
            <h4 className="mt-4 text-dark">{`Calories : ${Math.floor(
              calories
            )} `}</h4>
            <h4 className="mt-4 text-dark">{`${
              digest[0].label
            } : ${digest[0].total.toFixed(2)} ${digest[0].unit}`}</h4>
            <h4 className="mt-4 text-dark">{`${
              digest[1].label
            } : ${digest[1].total.toFixed(2)} ${digest[1].unit}`}</h4>
            <h4 className="mt-4 text-dark">{`${
              digest[2].label
            } : ${digest[2].total.toFixed(2)} ${digest[2].unit}`}</h4>
            <h4 className="mt-4 text-dark">{`Total weight : ${Math.floor(
              weight
            )} g`}</h4>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button
          type="button"
          className="btn btn-primary float-right "
          data-toggle="modal"
          data-target="#exampleModalLong"
          onClick={() => {
            displayRecipe(label, image, ingredients);
          }}
        >
          Show recipe
        </button>
      </div>
    </div>
  );
}

export default Recipe;

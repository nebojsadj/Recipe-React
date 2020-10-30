import React from "react";
import { useDispatch } from "react-redux";
import { display_recipe } from "./redux/actions";

function Recipe({ recipe }) {
  const { label, image, ingredients, totalWeight, digest, calories } = recipe;
  const dig = digest.slice(0, 3);
  const dispatch = useDispatch();

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
            <ul className="list-group mt-5">
              {dig.map((el, index) => (
                <li className="digest" key={index}>{`${
                  el.label
                } : ${el.total.toFixed(2)} ${el.unit}`}</li>
              ))}
            </ul>
            <h4 className="float-left mt-5">{`Weight : ${Math.floor(
              totalWeight
            )} g`}</h4>
            <h4 className="float-left">{`Calories : ${Math.floor(
              calories
            )} cal`}</h4>
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
            dispatch(display_recipe(label, image, ingredients));
          }}
        >
          Show recipe
        </button>
      </div>
    </div>
  );
}

export default Recipe;

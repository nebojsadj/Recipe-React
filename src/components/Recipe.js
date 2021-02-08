import React from "react";
import { useDispatch } from "react-redux";
import { display_recipe } from "../redux/actions";

function Recipe({ recipe }) {
  const { label, image, ingredients, totalWeight, digest, calories } = recipe;
  const dig = digest.slice(0, 3);
  const dispatch = useDispatch();

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        boxShadow: "0 0 9px black",
      }}
    >
      <div className="card-header">
        <h5 className=" text-center text-primary">{label}</h5>
      </div>
      <div className="card-body">
        <img src={image} alt={image} className=" mx-auto d-block imgs" />
      </div>
      <div>
        <ul className="list-group mt-3 mx-auto">
          {dig.map((el, index) => (
            <li
              className="d-flex justify-content-center digest"
              key={index}
            >{`${el.label} : ${el.total.toFixed(2)} ${el.unit}`}</li>
          ))}
        </ul>
        <p className="d-flex justify-content-center mt-3">{`Weight : ${Math.floor(
          totalWeight
        )} g`}</p>
        <p className="d-flex justify-content-center">{`Calories : ${Math.floor(
          calories
        )} cal`}</p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary btn-sm float-right "
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

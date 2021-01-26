import React from "react";
import { useSelector } from "react-redux";

function Modal() {
  const displayRecipe = useSelector((state) => state.recipes.displayRecipe);
  const { label, image, ingredients } = displayRecipe;

  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title mx-auto" id="exampleModalLongTitle">
              {label}
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-10 offset-1">
                <img src={image} alt="img" className="modalImg" />
              </div>

              <div className="col-10 offset-1 mt-3">
                <h3 className="text-center ingre">
                  Ingredients for preparation
                </h3>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-10 offset-1">
                <ol className="list-group">
                  {ingredients &&
                    ingredients.map((el, index) => (
                      <li className="list-group-item" key={index}>
                        {`◈ ${el.text}`}
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning closeBtn"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

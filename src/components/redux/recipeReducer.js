import * as types from "./types";
import initialState from "./initialState";

function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case types.RECIPES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.RECIPES_SUCCESS:
      return { ...state, loading: false, recipes: action.payload, error: "" };
    case types.RECIPES_ERROR:
      return { ...state, recipes: [], error: action.payload };
    case types.DISPLAY_RECIPE:
      return {
        ...state,
        displayRecipe: action.payload,
      };
    default:
      return state;
  }
}

export default recipeReducer;

import * as types from "./types";

const id = "c40bf89b";
const key = "0682d733664b0f3c2729c065b6c1acee";

export const fetch_recipes = (recipe) => {
  return function (dispatch) {
    dispatch(recipes_loading());
    fetch(
      `https://api.edamam.com/search?q=${recipe}&app_id=${id}&app_key=${key}`
    )
      .then((response) => response.json())
      .then((recipes) => {
        dispatch(recipes_success(recipes.hits.map((el) => el.recipe)));
      })
      .catch((error) => {
        dispatch(recipes_error(error.mesage));
      });
  };
};

export const recipes_loading = () => {
  return {
    type: types.RECIPES_LOADING,
  };
};

export const recipes_success = (recipes) => {
  return {
    type: types.RECIPES_SUCCESS,
    payload: recipes,
  };
};

export const recipes_error = (error) => {
  return {
    type: types.RECIPES_ERROR,
    payload: error,
  };
};

export const display_recipe = (label, image, ingredients) => {
  return {
    type: types.DISPLAY_RECIPE,
    payload: { label: label, image: image, ingredients: ingredients },
  };
};

import React, { useEffect, StrictMode } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import Modal from "./components/Modal";
import Search from "./components/Search";
import { fetch_recipes } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_recipes("beef"));
  }, [dispatch]);

  return (
    <StrictMode>
      <Header />
      <Search />
      <RecipeList />
      <Modal />
    </StrictMode>
  );
}

export default App;

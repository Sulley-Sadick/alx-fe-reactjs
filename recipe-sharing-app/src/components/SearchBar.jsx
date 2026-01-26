import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.setSearchTerm);

  <input type="search" placeholder="Search recipes" onChange={(e) => searchTerm(e.target.value)} />;
};

export default SearchBar;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/recipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationList from "./components/RecommendationsList";

function App() {
  return (
    <>
      <AddRecipeForm />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/" element={<FavoritesList />} />
          <Route path="/" element={<RecommendationList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

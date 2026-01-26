import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/recipeDetails";

function App() {
  return (
    <>
      <AddRecipeForm />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

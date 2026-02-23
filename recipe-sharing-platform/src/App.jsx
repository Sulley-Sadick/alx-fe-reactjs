import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetails from './components/RecipeDetails'
import AddRecipeForm from "./components/AddRecipeForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetails />}/>
      <Route path="/add" element={<AddRecipeForm />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

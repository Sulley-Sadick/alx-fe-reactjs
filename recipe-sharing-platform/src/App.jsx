import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import RecipeDetails from './components/RecipeDetail'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetails />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

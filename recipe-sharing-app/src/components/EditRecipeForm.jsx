import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updatedRecipe = useRecipeStore((state) => state.updatedRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedRecipe(recipe.id, { title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <button type="submit">Submit Changes</button>
    </form>
  );
};

export default EditRecipeForm;

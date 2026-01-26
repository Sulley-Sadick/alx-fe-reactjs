import useRecipeStore from "./recipeStore";
import { Navigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = Navigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/recipes");
  };

  return (
    <button type="button" onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

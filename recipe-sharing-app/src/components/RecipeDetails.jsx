// Recipe Details Components
import DeleteRecipeButton from "./deleteRecipeButton";
import EditRecipeForm from "./editRecipeForm";
import useRecipeStore from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === recipeId));

  if (!recipe) return;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h1>{recipe.description}</h1>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;

import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites.map((id) => state.recipes.find((recipe) => recipe.id !== id)));

  return (
    <div>
      {favorites.map((recipe) => {
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>;
      })}
    </div>
  );
};

export default FavoritesList;

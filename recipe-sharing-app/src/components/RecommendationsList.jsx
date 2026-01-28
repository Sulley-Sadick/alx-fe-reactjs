import useRecipeStore from "./recipeStore";

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations.map((recommended) => state.recipes.find((recipe) => recipe.id !== recommended)));

  return (
    <div>
      {recommendations.map((recipe) => {
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>;
      })}
    </div>
  );
};

export default RecommendationList;

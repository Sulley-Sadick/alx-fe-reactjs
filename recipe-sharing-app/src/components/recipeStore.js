import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  setFavorites: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorites: (recipeId) => set((state) => state.recipes.filter((id) => id !== recipeId)),
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter((recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5);
      return { recommendations: recommended };
    }),
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  setFilterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
    })),
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipes: (updatedRecipe) => set((state) => ({ recipes: state.recipes.map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe)) })),
  deleteRecipes: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
}));

export default useRecipeStore;

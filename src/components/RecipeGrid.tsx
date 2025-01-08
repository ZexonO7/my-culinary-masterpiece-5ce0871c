import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types/Recipe';
import { FilterType } from './RecipeFilters';

interface RecipeGridProps {
  recipes: Recipe[];
  currentFilter: FilterType;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, currentFilter }) => {
  const filteredRecipes = recipes.filter(recipe => {
    if (currentFilter === 'all') return true;
    return recipe.category === currentFilter;
  });

  const groupedRecipes = filteredRecipes.reduce((acc, recipe) => {
    const cuisine = recipe.cuisine;
    if (!acc[cuisine]) {
      acc[cuisine] = [];
    }
    acc[cuisine].push(recipe);
    return acc;
  }, {} as Record<string, Recipe[]>);

  return (
    <section className="container py-8 animate-[fadeIn_0.6s_ease-in]">
      {Object.entries(groupedRecipes).map(([cuisine, recipes]) => (
        <div key={cuisine} className="mb-12 animate-[fadeIn_0.4s_ease-in]">
          <h3 className="font-playfair text-2xl font-bold mb-6 text-primary-DEFAULT">
            {cuisine} Cuisine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div key={recipe.id} className="animate-fade-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecipeGrid;
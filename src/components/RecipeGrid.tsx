import React, { useEffect, useRef } from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types/Recipe';
import { FilterType } from './RecipeFilters';

interface RecipeGridProps {
  recipes: Recipe[];
  currentFilter: FilterType;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, currentFilter }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll('.scroll-trigger');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    if (currentFilter === 'all') return true;
    return recipe.category.includes(currentFilter);
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
    <section className="container py-8 animate-[fadeIn_0.6s_ease-in]" ref={gridRef}>
      {Object.entries(groupedRecipes).map(([cuisine, recipes], cuisineIndex) => (
        <div 
          key={cuisine} 
          className="mb-12 scroll-trigger"
          style={{ transitionDelay: `${cuisineIndex * 0.2}s` }}
        >
          <h3 className="font-playfair text-2xl font-bold mb-6 text-primary-DEFAULT">
            {cuisine} Cuisine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <div 
                key={recipe.id} 
                className="scroll-trigger"
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
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
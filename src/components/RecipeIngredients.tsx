
import React from 'react';

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  return (
    <div className="bg-primary-dark/50 p-6 rounded-xl border border-primary-DEFAULT/20">
      <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT mb-4">Ingredients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="text-gray-300 flex items-center gap-2">
            <span className="min-w-2 h-2 rounded-full bg-gold"/>
            <span className="text-sm">{ingredient}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeIngredients;

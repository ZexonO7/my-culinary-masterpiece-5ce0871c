import React from 'react';

interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  return (
    <div className="bg-primary-dark/50 p-6 rounded-xl border border-primary-DEFAULT/20">
      <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT mb-4">Ingredients</h2>
      <ul className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold"/>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
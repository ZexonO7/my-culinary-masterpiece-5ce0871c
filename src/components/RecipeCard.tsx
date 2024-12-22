import React from 'react';
import { Recipe } from '../types/Recipe';
import { Clock, ChefHat } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="recipe-card rounded-lg p-4 transition-all duration-300 hover:transform hover:scale-105">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="font-playfair text-xl font-bold mb-2 gold-gradient">
        {recipe.title}
      </h3>
      <p className="text-gray-300 mb-4">{recipe.description}</p>
      <div className="flex justify-between items-center text-sm text-primary-DEFAULT">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{recipe.cookingTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <ChefHat size={16} />
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
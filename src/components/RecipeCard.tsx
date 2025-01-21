import React, { useState } from 'react';
import { Recipe } from '../types/Recipe';
import { Clock, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error(`Failed to load image for recipe: ${recipe.title}`);
    setImageError(true);
  };

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="recipe-card gradient-border rounded-lg p-4">
        <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
          <img
            src={imageError ? '/placeholder.svg' : recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <h3 className="font-playfair text-xl font-bold mb-2 gold-gradient">
          {recipe.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
          {recipe.description}
        </p>
        <div className="flex justify-between items-center text-sm text-primary-DEFAULT">
          <div className="flex items-center gap-2 transition-all duration-300 hover:text-gold floating">
            <Clock size={16} />
            <span>{recipe.cookingTime}</span>
          </div>
          <div className="flex items-center gap-2 transition-all duration-300 hover:text-gold floating">
            <ChefHat size={16} />
            <span>{recipe.difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
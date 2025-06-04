
import React, { useState } from 'react';
import { Recipe } from '../types/Recipe';
import { Clock, ChefHat, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LockOverlay from './LockOverlay';
import { detectAllergens } from '../utils/allergenDetection';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [imageError, setImageError] = useState(false);
  const detectedAllergens = detectAllergens(recipe.ingredients);

  const handleImageError = () => {
    console.error(`Failed to load image for recipe: ${recipe.title}`);
    setImageError(true);
  };

  const cardContent = (
    <div className="recipe-card rounded-lg p-4 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4 transition-transform duration-300 hover:scale-105">
        <img
          src={imageError ? '/placeholder.svg' : recipe.image}
          alt={recipe.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
          onError={handleImageError}
        />
        {recipe.locked && <LockOverlay />}
        {detectedAllergens.length > 0 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white p-1 rounded-full">
            <AlertTriangle size={16} />
          </div>
        )}
      </div>
      <h3 className="font-playfair text-xl font-bold mb-2 gold-gradient transition-colors duration-300">
        {recipe.title}
      </h3>
      <p className="text-gray-300 mb-4 transition-colors duration-300">
        {recipe.description}
      </p>
      {detectedAllergens.length > 0 && (
        <div className="mb-3 text-xs text-orange-400 flex items-center gap-1">
          <AlertTriangle size={12} />
          <span>Contains allergens</span>
        </div>
      )}
      <div className="flex justify-between items-center text-sm text-primary-DEFAULT">
        <div className="flex items-center gap-2 transition-all duration-300 hover:text-gold">
          <Clock size={16} />
          <span>{recipe.cookingTime}</span>
        </div>
        <div className="flex items-center gap-2 transition-all duration-300 hover:text-gold">
          <ChefHat size={16} />
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  );

  if (recipe.locked) {
    return (
      <div className="relative cursor-not-allowed">
        {cardContent}
      </div>
    );
  }

  return (
    <Link to={`/recipe/${recipe.id}`}>
      {cardContent}
    </Link>
  );
};

export default RecipeCard;

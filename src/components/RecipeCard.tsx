import React, { useState } from 'react';
import { Recipe } from '../types/Recipe';
import { Clock, ChefHat } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [imageError, setImageError] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const navigate = useNavigate();

  const handleImageError = () => {
    console.error(`Failed to load image for recipe: ${recipe.title}`);
    setImageError(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsZooming(true);
    console.log('Recipe card clicked, starting zoom animation');
    
    // Wait for animation to complete before navigating
    setTimeout(() => {
      console.log('Zoom animation complete, navigating to recipe detail');
      navigate(`/recipe/${recipe.id}`);
    }, 500); // Match this with the CSS transition duration
  };

  return (
    <Link to={`/recipe/${recipe.id}`} onClick={handleClick}>
      <div 
        className={`recipe-card rounded-lg p-4 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-lg ${
          isZooming ? 'scale-150 opacity-0' : ''
        }`}
      >
        <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4 transition-transform duration-300 hover:scale-105">
          <img
            src={imageError ? '/placeholder.svg' : recipe.image}
            alt={recipe.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
            onError={handleImageError}
          />
        </div>
        <h3 className="font-playfair text-xl font-bold mb-2 gold-gradient transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-gray-300 mb-4 transition-colors duration-300">
          {recipe.description}
        </p>
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
    </Link>
  );
};

export default RecipeCard;
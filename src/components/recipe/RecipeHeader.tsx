import React from 'react';
import RecipeMetadata from '../RecipeMetadata';

interface RecipeHeaderProps {
  title: string;
  description: string;
  cookingTime: string;
  difficulty: string;
  cuisine: string;
}

const RecipeHeader: React.FC<RecipeHeaderProps> = ({
  title,
  description,
  cookingTime,
  difficulty,
  cuisine
}) => {
  return (
    <div>
      <h1 className="font-playfair text-4xl md:text-5xl font-bold gold-gradient mb-4">
        {title}
      </h1>
      
      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        {description}
      </p>
      
      <RecipeMetadata 
        cookingTime={cookingTime}
        difficulty={difficulty}
        cuisine={cuisine}
      />
    </div>
  );
};

export default RecipeHeader;
import React from 'react';
import { Clock, ChefHat, Utensils } from 'lucide-react';

interface RecipeMetadataProps {
  cookingTime: string;
  difficulty: string;
  cuisine: string;
}

const RecipeMetadata: React.FC<RecipeMetadataProps> = ({
  cookingTime,
  difficulty,
  cuisine
}) => {
  return (
    <div className="flex gap-6 mb-8">
      <div className="flex items-center gap-2 text-primary-DEFAULT">
        <Clock size={24} />
        <span className="text-lg">{cookingTime}</span>
      </div>
      <div className="flex items-center gap-2 text-primary-DEFAULT">
        <ChefHat size={24} />
        <span className="text-lg">{difficulty}</span>
      </div>
      <div className="flex items-center gap-2 text-primary-DEFAULT">
        <Utensils size={24} />
        <span className="text-lg">{cuisine}</span>
      </div>
    </div>
  );
};

export default RecipeMetadata;
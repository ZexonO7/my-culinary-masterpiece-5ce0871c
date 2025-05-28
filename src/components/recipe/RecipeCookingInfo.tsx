
import React from 'react';
import { ChefHat, Clock, Flame } from 'lucide-react';

interface RecipeCookingInfoProps {
  cookingTips: string[];
  recipeId?: number;
}

const RecipeCookingInfo: React.FC<RecipeCookingInfoProps> = ({
  cookingTips,
  recipeId
}) => {
  // Define prep and cook times based on recipe ID
  const getTimeBreakdown = (id?: number) => {
    if (id === 6) { // Roasted Smashed Potato Salad
      return {
        prepTime: "20 mins",
        cookTime: "40 mins"
      };
    }
    // Default times for other recipes
    return {
      prepTime: "15 mins",
      cookTime: "30 mins"
    };
  };

  const { prepTime, cookTime } = getTimeBreakdown(recipeId);

  return (
    <div className="space-y-4">
      <div className="bg-primary-dark/50 rounded-lg border border-primary-DEFAULT/20 p-4 space-y-4">
        <h3 className="font-playfair text-xl text-primary-DEFAULT flex items-center gap-2">
          <ChefHat size={20} />
          Cooking Tips
        </h3>
        <ul className="space-y-2">
          {cookingTips.map((tip, index) => (
            <li key={index} className="text-gray-300 flex items-start gap-2">
              <Flame size={20} className="text-gold" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary-dark/50 rounded-lg border border-primary-DEFAULT/20 p-4">
        <h3 className="font-playfair text-xl text-primary-DEFAULT flex items-center gap-2 mb-3">
          <Clock size={20} />
          Time Breakdown
        </h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-2 bg-primary-DEFAULT/10 rounded-lg">
            <p className="text-gray-400">Prep Time</p>
            <p className="text-primary-DEFAULT font-semibold">{prepTime}</p>
          </div>
          <div className="p-2 bg-primary-DEFAULT/10 rounded-lg">
            <p className="text-gray-400">Cook Time</p>
            <p className="text-primary-DEFAULT font-semibold">{cookTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCookingInfo;

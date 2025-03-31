
import React from 'react';

interface RecipeInstructionsProps {
  instructions: string[];
}

const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({ instructions }) => {
  return (
    <div className="bg-primary-dark/50 p-6 rounded-xl border border-primary-DEFAULT/20">
      <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT mb-4">Instructions</h2>
      <ol className="space-y-4">
        {instructions.map((instruction, index) => (
          <li key={index} className="text-gray-300 flex gap-4">
            <span className="font-playfair text-gold font-bold min-w-[20px]">{index + 1}.</span>
            <p className="leading-relaxed">{instruction}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructions;

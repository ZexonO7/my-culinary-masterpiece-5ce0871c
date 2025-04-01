
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface RecipeInstructionsProps {
  instructions: string[];
}

const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({ instructions }) => {
  return (
    <div className="bg-primary-dark/50 p-6 rounded-xl border border-primary-DEFAULT/20">
      <h2 className="font-playfair text-2xl font-bold text-primary-DEFAULT mb-4">Instructions</h2>
      <ScrollArea className="h-64">
        <ol className="grid grid-cols-1 gap-3 pr-4">
          {instructions.map((instruction, index) => (
            <li key={index} className="text-gray-300 flex gap-2">
              <span className="font-playfair text-gold font-bold min-w-[20px]">{index + 1}.</span>
              <p className="text-sm leading-tight">{instruction}</p>
            </li>
          ))}
        </ol>
      </ScrollArea>
    </div>
  );
};

export default RecipeInstructions;

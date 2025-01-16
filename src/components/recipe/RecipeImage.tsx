import React from 'react';
import { Recipe } from '../../types/Recipe';
import { Share2 } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface RecipeImageProps {
  recipe: Recipe;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ recipe }) => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Recipe link has been copied to your clipboard",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy the link to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="relative overflow-hidden rounded-2xl shadow-xl hover-scale">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            {recipe.category.map((cat, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full bg-primary-DEFAULT/20 text-primary-DEFAULT text-sm border border-primary-DEFAULT/30"
              >
                {cat}
              </span>
            ))}
          </div>
          
          <button 
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-primary-dark/50 border border-primary-DEFAULT/20 text-primary-DEFAULT hover:bg-primary-DEFAULT/10 transition-colors"
            onClick={handleShare}
          >
            <Share2 size={20} />
            Share Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeImage;
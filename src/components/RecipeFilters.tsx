import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type FilterType = 'all' | 'vegan' | 'vegetarian' | 'desserts';

interface RecipeFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const RecipeFilters: React.FC<RecipeFiltersProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <Tabs value={currentFilter} onValueChange={(value) => onFilterChange(value as FilterType)} className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            All
          </TabsTrigger>
          <TabsTrigger value="vegan" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Vegan
          </TabsTrigger>
          <TabsTrigger value="vegetarian" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Vegetarian
          </TabsTrigger>
          <TabsTrigger value="desserts" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Desserts
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default RecipeFilters;
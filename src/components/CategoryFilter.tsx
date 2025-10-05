import { Button } from "@/components/ui/button";
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}
export const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange
}: CategoryFilterProps) => {
  return <div className="flex flex-wrap gap-2 justify-center mb-8">
      
      {categories.map(category => {})}
    </div>;
};
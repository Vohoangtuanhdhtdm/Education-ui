import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-4 px-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline"
          className={`px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200 ${
            selectedCategory === category
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-gray-300"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}

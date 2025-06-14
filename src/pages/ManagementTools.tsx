import { useManagementTools } from "@/hooks/useManagementTools";
import { ToolSearch } from "../components/module/managementTools/ToolSearch";
import { CategoryFilters } from "../components/module/managementTools/CategoryFilters";
import {
  categories,
  toolsData,
} from "../components/module/managementTools/managementToolsData";
import { ToolGrid } from "../components/module/managementTools/ToolGrid";

export function ManagementTools() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredTools,
  } = useManagementTools(toolsData);

  return (
    <div className="py-16 px-4 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
        Công Cụ AI Hỗ Trợ Giáo Viên
      </h2>
      <ToolSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ToolGrid tools={filteredTools} />
    </div>
  );
}

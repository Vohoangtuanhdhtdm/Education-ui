import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ToolSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function ToolSearch({ searchTerm, onSearchChange }: ToolSearchProps) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative w-full max-w-md">
        <Input
          type="text"
          placeholder="Tìm kiếm công cụ..."
          className="py-3 text-lg pl-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <Search className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
}

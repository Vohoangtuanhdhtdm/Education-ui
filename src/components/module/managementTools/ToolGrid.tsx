import { ToolCard } from "./ToolCard";
import type { Tool } from "@/components/module/managementTools/managementToolsData";

interface ToolGridProps {
  tools: Tool[];
}

export function ToolGrid({ tools }: ToolGridProps) {
  return (
    <div className="mt-8 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
      {tools.length > 0 ? (
        tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)
      ) : (
        <p className="col-span-full text-center text-gray-600 text-lg">
          Không tìm thấy công cụ nào phù hợp.
        </p>
      )}
    </div>
  );
}

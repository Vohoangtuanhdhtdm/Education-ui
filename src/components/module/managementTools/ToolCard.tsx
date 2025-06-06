import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Tool } from "@/components/module/managementTools/managementToolsData";

interface ToolCardProps {
  tool: Tool;
}
export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;
  return (
    <Card
      className={`h-52 rounded-2xl shadow-lg p-5 flex flex-col justify-start transform hover:scale-105 hover:shadow-xl transition duration-300 ${tool.bgColor} cursor-pointer`}
    >
      <CardHeader>
        <div className="flex items-center gap-x-3 mb-2">
          <Icon className="w-8 h-8 text-blue-500 flex-shrink-0" />

          <CardTitle className="text-lg font-semibold text-gray-800">
            {tool.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm text-gray-600">
          {tool.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

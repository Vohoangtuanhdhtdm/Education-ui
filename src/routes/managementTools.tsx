import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/managementTools")({
  component: RouteComponent,
});

interface Tool {
  id: number;
  category: string;
  title: string;
  description: string;
  bgColor: string;
  iconPath: string;
}

const toolsData: Tool[] = [
  {
    id: 1,
    category: "Lesson Design",
    title: "Lesson Plan",
    description:
      "Design structured lesson plans tailored to your curriculum, ensuring alignment with educational goals.",
    bgColor: "bg-pink-100",
    iconPath:
      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253",
  },
  {
    id: 2,
    category: "Assessment",
    title: "Learning Objective(s)",
    description:
      "Set clear, measurable objectives to guide instruction and evaluate student progress effectively.",
    bgColor: "bg-green-100",
    iconPath: "M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 3,
    category: "Engagement",
    title: "Discussion Prompts",
    description:
      "Generate thought-provoking prompts to foster engaging and meaningful classroom discussions.",
    bgColor: "bg-purple-100",
    iconPath:
      "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2H9v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h2m10 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0H7",
  },
  {
    id: 4,
    category: "Assessment",
    title: "Exit Ticket",
    description:
      "Create concise end-of-lesson assessments to gauge student understanding and retention.",
    bgColor: "bg-blue-100",
    iconPath:
      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    id: 5,
    category: "Goal Setting",
    title: "SMART Goal Writer",
    description:
      "Formulate specific, measurable, achievable, relevant, and time-bound goals for students.",
    bgColor: "bg-yellow-100",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const categories = [
  "All",
  "Lesson Design",
  "Assessment",
  "Engagement",
  "Goal Setting",
];

function RouteComponent() {
  // 2. State để lưu trữ danh mục đang chọn và từ khóa tìm kiếm
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Logic lọc và tìm kiếm
  const filteredTools = toolsData.filter((tool) => {
    // Lọc theo danh mục
    const matchesCategory =
      selectedCategory === "All" || tool.category === selectedCategory;

    // Lọc theo từ khóa tìm kiếm (không phân biệt hoa thường)
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
        Course Management Tools
      </h2>

      {/* Phần Tìm kiếm */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Tìm kiếm công cụ..."
            className="py-3 text-lg pl-4 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" // Class styling cho Input
            value={searchTerm} // Gắn giá trị input với state
            onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật state khi input thay đổi
          />
          <svg
            className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Phần các nút lọc theo dạng mục */}
      <div className="mb-12 flex flex-wrap justify-center gap-3 md:gap-4 px-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={`px-5 py-2 rounded-full text-base font-semibold transition-colors duration-200
                        ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white shadow-md" // Active state
                            : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-gray-300" // Inactive state
                        }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Hiển thị các Card công cụ */}
      <div className="mt-8 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <Card
              key={tool.id}
              className={`h-52 rounded-2xl shadow-lg p-5 flex flex-col justify-start transform hover:scale-105 hover:shadow-xl transition duration-300 ${tool.bgColor} cursor-pointer`}
            >
              <CardHeader>
                <div className="flex items-center gap-x-3 mb-2">
                  <svg
                    className="w-8 h-8 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={tool.iconPath}
                    />
                  </svg>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {tool.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm text-gray-600">
                  {tool.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            Không tìm thấy công cụ nào phù hợp.
          </p>
        )}
      </div>
    </div>
  );
}

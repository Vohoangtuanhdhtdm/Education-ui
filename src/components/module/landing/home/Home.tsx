// pages/Home.tsx
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  UserCircleIcon,
  EyeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { FeatureCard } from "./FeatureCard"; // Giả sử FeatureCard ở cùng thư mục
import { EducationForAllSection } from "./EducationForAllSection";

export const Home = () => {
  const features = [
    {
      icon: <UserCircleIcon />,
      title: "Học tập Cá nhân hóa",
      description:
        "Tận dụng AI để xây dựng lộ trình học tập riêng biệt, giúp học sinh đạt được tiềm năng tối đa với tốc độ phù hợp.",
    },
    {
      icon: <EyeIcon />,
      title: "Bài giảng Tương tác",
      description:
        "Tham gia các bài giảng sống động với video, câu đố và phản hồi tức thời, tăng cường sự hứng thú và hiểu biết.",
    },
    {
      icon: <ChartBarIcon />,
      title: "Phân tích Thông minh",
      description:
        "Nhận báo cáo chi tiết về tiến độ học tập, giúp giáo viên và học sinh điều chỉnh phương pháp học hiệu quả hơn.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/*Hero Section */}
      <div className="flex flex-col items-center justify-start py-12 px-4 text-gray-800">
        <div className="relative mb-16 mt-8">
          <div className="bg-white rounded-full px-12 py-5 shadow-lg text-blue-700 font-bold text-3xl md:text-4xl text-center whitespace-nowrap hover:scale-105 transition duration-300 ease-in-out cursor-pointer ">
            Artificial Intelligence
          </div>
        </div>
        <div className="flex flex-col items-center text-center max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800 animate-fade-in whitespace-nowrap">
            Giáo dục với Trí tuệ Nhân tạo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
            Khám phá cách học thông minh hơn với các khóa học cá nhân hóa, bài
            giảng tương tác và những phân tích thông minh dành riêng cho học
            sinh và giáo viên.
          </p>
          <Button className="flex items-center gap-2 bg-blue-600 text-white py-7 rounded-2xl text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:scale-105 ease-in-out cursor-pointer">
            <p>Khám phá </p>
            <ArrowRightIcon className=" w-5 h-5" />
          </Button>
        </div>
      </div>

      <EducationForAllSection />

      {/* Features */}
      <div className="py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Tính năng nổi bật
        </h2>
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

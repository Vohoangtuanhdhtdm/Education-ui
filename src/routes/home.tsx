import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-start py-12 px-4 text-gray-800">
      {/* Phần tiêu đề "Artificial Intelligence" trong hình oval */}
      <div className="relative mb-16 mt-8">
        {" "}
        {/* mb-16 để tạo khoảng cách với phần dưới */}
        <div className="bg-white rounded-full px-12 py-5 shadow-lg text-blue-700 font-bold text-3xl md:text-4xl text-center whitespace-nowrap hover:scale-105 transition duration-300 ease-in-out cursor-pointer ">
          Artificial Intelligence
        </div>
      </div>

      {/* Phần nội dung chính (Hero Section) */}
      <div className="flex flex-col items-center text-center max-w-4xl px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800 animate-fade-in whitespace-nowrap">
          Biến đổi Giáo dục với Trí tuệ Nhân tạo
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
          Khám phá cách học thông minh hơn với các khóa học cá nhân hóa, bài
          giảng tương tác và những phân tích thông minh dành riêng cho học sinh
          và giáo viên.
        </p>
        <Button
          variant="default"
          className="flex items-center gap-2 bg-blue-600 text-white py-7 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:scale-105 ease-in-out cursor-pointer"
        >
          Khám phá ngay{" "}
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
      <div className="mt-28 w-full max-w-6xl flex flex-wrap justify-center gap-8 px-4">
        <Card className="w-full sm:w-80 lg:w-[30%] h-64 bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-start hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer">
          <CardHeader>
            <svg
              className="w-10 h-10 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <CardTitle>Học tập Cá nhân hóa</CardTitle>
            <CardDescription>
              Tận dụng AI để xây dựng lộ trình học tập riêng biệt, giúp học sinh
              đạt được tiềm năng tối đa với tốc độ phù hợp.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full sm:w-80 lg:w-[30%] h-64 bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-start hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer">
          <CardHeader>
            <svg
              className="w-10 h-10 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <CardTitle>Bài giảng Tương tác</CardTitle>
            <CardDescription>
              Tham gia các bài giảng sống động với video, câu đố và phản hồi tức
              thời, tăng cường sự hứng thú và hiểu biết.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full sm:80 lg:w-[30%] h-64 bg-white rounded-3xl shadow-xl p-6 flex flex-col justify-start hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer">
          <CardHeader>
            <svg
              className="w-10 h-10 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <CardTitle>Phân tích Thông minh</CardTitle>
            <CardDescription>
              Nhận báo cáo chi tiết về tiến độ học tập, giúp giáo viên và học
              sinh điều chỉnh phương pháp học hiệu quả hơn.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/tools/_tools/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4 border-t mt-4">
      <h3 className="text-lg font-semibold">
        Chào mừng đến với trang công cụ!
      </h3>
      <p className="text-gray-600 mt-2">
        Vui lòng chọn một chức năng ở trên để bắt đầu, ví dụ như "Tạo bài giảng"
        hoặc "Tạo câu hỏi".
      </p>
      <div style={{ marginBottom: "16px" }}>
        <Link to="/teacher/tools/createLesson">
          <button style={{ marginRight: "8px" }}>Tạo bài giảng</button>
        </Link>
        <Link to="/teacher/tools/createQuiz">
          <button>Tạo câu hỏi</button>
        </Link>
      </div>
    </div>
  );
}

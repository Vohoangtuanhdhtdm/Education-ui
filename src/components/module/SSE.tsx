import { useLectureStream } from "@/hooks/useLectureStream";
import type { LectureChunk } from "@/type/lecture/lecture";
import { useRef, useEffect } from "react";
import toast from "react-hot-toast";

export const SSE = () => {
  // --- Gọi Hook để lấy state và hàm điều khiển ---
  const { lectureContent, status, statusMessage, startGeneration } =
    useLectureStream("http://localhost:3001/api/lecture-stream");

  const isGenerating = status === "connecting" || status === "streaming";
  const isContentAvailable = lectureContent.length > 0;
  const isStreamFinished = status === "success" || status === "error";

  // --- Logic cho việc cuộn trang ---
  const contentEndRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Cuộn xuống mỗi khi nội dung bài giảng thay đổi
  useEffect(scrollToBottom, [lectureContent]);

  const handleCopyAll = async () => {
    const allContent = lectureContent
      .map((chunk) => `${chunk.content}`) // Chỉ lấy nội dung, không kèm "Phần X/Y"
      .join("\n\n"); // Nối các phần bằng hai dòng trống cho dễ đọc

    if (allContent.trim().length === 0) {
      toast.error("Không có nội dung để sao chép!");
      return;
    }
    try {
      await navigator.clipboard.writeText(allContent);

      toast.success("Đã sao chép tất cả nội dung!");
    } catch (err) {
      console.error("Failed to copy text:", err);
      toast.error("Không thể sao chép. Vui lòng thử lại.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col items-center pb-10">
      <header className="w-full bg-gray-800 p-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-sky-400 mb-4">
            AI Tạo Nội Dung Bài Giảng
          </h1>
          <button
            onClick={startGeneration}
            disabled={isGenerating}
            className={`
              py-3 px-6 text-lg font-semibold rounded-lg shadow-md
              transition-colors duration-150 ease-in-out
              ${
                isGenerating
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-sky-500 hover:bg-sky-600 text-white cursor-pointer"
              }
            `}
          >
            {isGenerating ? "Đang Tạo..." : "Bắt Đầu Tạo Bài Giảng"}
          </button>
          <p
            className={`text-sm italic mt-3 min-h-[20px] ${
              status === "error" ? "text-red-500 font-medium" : "text-gray-400"
            }`}
          >
            {statusMessage}
          </p>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-6 w-full max-w-3xl mt-5">
        <div className="bg-white shadow-xl rounded-lg p-6 min-h-[400px] max-h-[60vh] overflow-y-auto relative">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">
            Nội dung bài giảng:
          </h2>
          {isContentAvailable && isStreamFinished && (
            <div className="absolute top-4 right-4 z-10 flex flex-col items-end">
              <button
                onClick={handleCopyAll}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md shadow-md transition-colors duration-150 ease-in-out flex items-center"
                title="Sao chép toàn bộ nội dung"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
                Sao chép
              </button>
            </div>
          )}
          {lectureContent.length === 0 && !isGenerating && (
            <p className="text-gray-500">Nhấn nút để bắt đầu tạo nội dung.</p>
          )}
          {lectureContent.length === 0 && isGenerating && (
            <p className="text-gray-500">
              Đang chờ nội dung đầu tiên từ server...
            </p>
          )}
          <div className="space-y-4">
            {lectureContent.map((chunk: LectureChunk) => (
              <div
                key={chunk.id}
                className="bg-white border border-sky-200 p-5 rounded-lg shadow-sm animate-fadeIn text-gray-800 break-words" // Thay đổi styling
              >
                <p className="leading-relaxed text-base">
                  <strong className="text-sky-700 font-semibold text-lg">
                    Phần {chunk.part}/{chunk.totalParts}:
                  </strong>{" "}
                  {chunk.content}
                </p>
              </div>
            ))}
          </div>
          <div ref={contentEndRef} />
        </div>
      </main>
    </div>
  );
};

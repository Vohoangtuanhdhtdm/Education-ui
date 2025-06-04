import React, { useState, useEffect, useRef } from "react";
interface LectureChunk {
  id: number;
  content: string;
  part: number;
  totalParts: number;
}

interface StreamEndEvent {
  type: "END";
  message: string;
}
type StreamEventData = LectureChunk | StreamEndEvent;

export const SSE = () => {
  // --- State Variables (Biến trạng thái) ---
  const [lectureContent, setLectureContent] = useState<LectureChunk[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");

  // --- Refs (Tham chiếu) ---
  const eventSourceRef = useRef<EventSource | null>(null); //  EventSource (là đối tượng dùng để kết nối SSE với server)
  const contentEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    contentEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [lectureContent]);

  const startGeneration = () => {
    // 1. Đóng kết nối cũ (nếu có)
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    // 2. Reset trạng thái
    setLectureContent([]);
    setIsGenerating(true);
    setStatusMessage("Đang kết nối và nhận dữ liệu...");

    // 3. Tạo kết nối EventSource mới
    const newEventSource = new EventSource(
      "http://localhost:3001/api/lecture-stream"
    );
    eventSourceRef.current = newEventSource; // Lưu tham chiếu

    // 4. Đăng ký các trình xử lý sự kiện cho EventSource
    newEventSource.onopen = () => {
      console.log("SSE Connection opened!");
      setStatusMessage("Đã kết nối! Đang nhận nội dung bài giảng...");
    };

    newEventSource.onmessage = (event) => {
      // Khi nhận được một tin nhắn từ server
      try {
        const parsedData: StreamEventData = JSON.parse(event.data); // Dữ liệu từ server là chuỗi JSON, cần parse

        if ("type" in parsedData && parsedData.type === "END") {
          // Kiểm tra có phải tin nhắn KẾT THÚC không
          setStatusMessage(parsedData.message);
          setIsGenerating(false);
          newEventSource.close(); // Đóng kết nối
          eventSourceRef.current = null;
          console.log("SSE Stream ended by server.");
        } else if ("content" in parsedData) {
          // Nếu là một phần nội dung bài giảng
          // Cập nhật state lectureContent, Giữ lại các phần cũ, Thêm phần mới vào cuối mảng
          setLectureContent((prevContent) => [
            ...prevContent,
            parsedData as LectureChunk,
          ]);
          setStatusMessage(
            `Đang nhận phần ${parsedData.part}/${parsedData.totalParts}...`
          );
        }
      } catch (error) {
        console.error("Error parsing SSE data:", error);
        setStatusMessage("Lỗi xử lý dữ liệu từ server.");
      }
    };

    newEventSource.onerror = (error) => {
      // Khi có lỗi xảy ra với kết nối
      console.error("EventSource failed:", error);
      setStatusMessage("Lỗi kết nối đến server. Vui lòng thử lại.");
      setIsGenerating(false);
      newEventSource.close();
      eventSourceRef.current = null;
    };
  };

  useEffect(() => {
    // Hàm này sẽ được trả về và React sẽ gọi nó khi component bị "unmount" (gỡ bỏ khỏi DOM), mỗi khi component được render lại
    // Kiểm tra nếu có kết nối SSE đang mở thì đóng nó
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        console.log("SSE Connection closed on component unmount.");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col items-center">
      <header className="w-full bg-gray-800 p-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-sky-400 mb-4">
            AI Tạo Nội Dung Bài Giảng (Demo Tailwind)
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
          <p className="text-sm italic text-gray-400 mt-3 min-h-[20px]">
            {statusMessage}
          </p>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6 w-full max-w-3xl mt-5">
        <div className="bg-white shadow-xl rounded-lg p-6 min-h-[300px] max-h-[60vh] overflow-y-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-3">
            Nội dung bài giảng:
          </h2>
          {lectureContent.length === 0 && !isGenerating && (
            <p className="text-gray-500">Nhấn nút để bắt đầu tạo nội dung.</p>
          )}
          <div className="space-y-4">
            {lectureContent.map((chunk) => (
              <div
                key={chunk.id}
                className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-md shadow animate-fadeIn"
              >
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-sky-700">
                    Phần {chunk.part}/{chunk.totalParts}:
                  </strong>{" "}
                  {chunk.content}
                </p>
              </div>
            ))}
          </div>
          <div ref={contentEndRef} /> {/* Div trống để scroll tới */}
        </div>
      </main>

      <footer className="w-full text-center p-4 mt-auto">
        <p className="text-sm text-gray-500">
          Demo sử dụng React, TypeScript, Express.js & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

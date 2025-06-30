import type { Message } from "@/type/llm-ui";
import { useEffect, useRef, useState } from "react";
import { ModelMessage } from "./ModelMessage";

// --- COMPONENT CHAT CHÍNH ---
const GeminiChat = () => {
  // --- Quản lý trạng thái ---
  const [history, setHistory] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Tự động cuộn xuống cuối khi có tin nhắn mới
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // --- Hàm xử lý gửi tin nhắn và gọi API ---
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: userInput };
    const updatedHistory = [...history, userMessage];
    setHistory(updatedHistory);
    setUserInput("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const requestBody = {
        contents: updatedHistory.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Lỗi API: ${response.statusText}`);
      }

      // Thêm một tin nhắn rỗng của model để bắt đầu stream vào đó
      setHistory((prev) => [...prev, { role: "model", content: "" }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);

        try {
          // Gemini trả về một chuỗi có thể chứa nhiều JSON, ta cần xử lý
          const jsonStr = chunk.replace(/^data: /, "").trim();
          const data = JSON.parse(jsonStr);
          const text = data.candidates[0]?.content?.parts[0]?.text || "";

          if (text) {
            // Nối nội dung mới vào tin nhắn cuối cùng (tin nhắn của model)
            setHistory((prev) => {
              const newHistory = [...prev];
              newHistory[newHistory.length - 1].content += text;
              return newHistory;
            });
          }
        } catch {
          // Bỏ qua các chunk không phải JSON hợp lệ
        }
      }
    } catch (error: any) {
      setHistory((prev) => [
        ...prev,
        { role: "model", content: `Đã xảy ra lỗi: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Thay thế class bằng utility của Tailwind
    <div className="flex flex-col h-[90vh] max-w-3xl mx-auto my-8 border border-gray-300 rounded-lg overflow-hidden shadow-xl">
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {history.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`py-2 px-4 rounded-2xl max-w-[75%] break-words ${msg.role === "user" ? "bg-blue-500 text-white rounded-br-lg" : "bg-gray-200 text-gray-800 rounded-bl-lg"}`}
            >
              {msg.role === "user" ? (
                msg.content
              ) : (
                <ModelMessage content={msg.content} />
              )}
            </div>
          </div>
        ))}
        {isLoading && history[history.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="py-2 px-4 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-lg">
              <span className="font-bold text-lg animate-blink-cursor">|</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form
        className="flex items-center p-4 border-t border-gray-200 bg-gray-50"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Nhập tin nhắn của bạn..."
          disabled={isLoading}
          className="flex-1 border border-gray-300 rounded-full py-2 px-4 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full cursor-pointer transition-colors hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Gửi
        </button>
      </form>
    </div>
  );
};

export default GeminiChat;

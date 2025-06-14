import type {
  Action,
  LectureChunk,
  StreamEventData,
  StreamState,
} from "@/type/lecture/lecture";
import { useReducer, useRef, useCallback } from "react";

// --- Reducer (Hàm quản lý việc cập nhật State) ---
const initialState: StreamState = {
  status: "idle",
  statusMessage: "",
  lectureContent: [],
};

const reducer = (state: StreamState, action: Action): StreamState => {
  switch (action.type) {
    case "CONNECT_START":
      return {
        ...initialState, // Reset state khi bắt đầu
        status: "connecting",
        statusMessage: "Đang kết nối và nhận dữ liệu...",
      };
    case "CONNECT_SUCCESS":
      return {
        ...state,
        status: "streaming",
        statusMessage: "Đã kết nối! Đang nhận nội dung bài giảng...",
      };
    case "RECEIVE_CHUNK":
      return {
        ...state,
        lectureContent: [...state.lectureContent, action.payload],
        statusMessage: `Đang nhận phần ${action.payload.part}/${action.payload.totalParts}...`,
      };
    case "STREAM_END":
      return {
        ...state,
        status: "success",
        statusMessage: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        status: "error",
        statusMessage: action.payload,
      };
    default:
      return state;
  }
};

export const useLectureStream = (url: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const eventSourceRef = useRef<EventSource | null>(null);

  const startGeneration = useCallback(() => {
    // Đóng kết nối cũ nếu có
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
    }

    // Bắt đầu quá trình mới
    dispatch({ type: "CONNECT_START" });
    const newEventSource = new EventSource(url);
    // Tạo đối tượng newEventSource sau đó tham chiếu vào eventSourceRef để check kết nối cũ
    eventSourceRef.current = newEventSource;

    newEventSource.onopen = () => {
      console.log("SSE Connection opened!");
      dispatch({ type: "CONNECT_SUCCESS" });
    };

    // Nhận dữ liệu từ server
    newEventSource.onmessage = (event) => {
      try {
        const parsedData: StreamEventData = JSON.parse(event.data);
        //  Check parsedData có thuộc tính tên là "type" hay không,
        //  vì LectureChunk (không có thuộc tính type)
        if ("type" in parsedData && parsedData.type === "END") {
          dispatch({ type: "STREAM_END", payload: parsedData.message });
          newEventSource.close();
        } else if ("content" in parsedData) {
          dispatch({
            type: "RECEIVE_CHUNK",
            payload: parsedData as LectureChunk,
          });
        }
      } catch (error) {
        console.error("Error parsing SSE data:", error);
        dispatch({ type: "ERROR", payload: "Lỗi xử lý dữ liệu từ server." });
      }
    };

    newEventSource.onerror = (error) => {
      console.error("EventSource failed:", error);
      dispatch({
        type: "ERROR",
        payload: "Lỗi kết nối đến server. Vui lòng thử lại.",
      });
      newEventSource.close();
    };
  }, [url]); // useCallback để đảm bảo hàm không bị tạo lại không cần thiết

  return { ...state, startGeneration };
};

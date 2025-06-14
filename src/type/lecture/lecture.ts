export interface LectureChunk {
  id: number;
  content: string;
  part: number;
  totalParts: number;
}

interface StreamEndEvent {
  type: "END";
  message: string;
}

export type StreamEventData = LectureChunk | StreamEndEvent;

// Trạng thái của stream
type StreamStatus = "idle" | "connecting" | "streaming" | "success" | "error";

export interface StreamState {
  status: StreamStatus;
  statusMessage: string;
  lectureContent: LectureChunk[];
}

// Các action để cập nhật state
export type Action =
  | { type: "CONNECT_START" }
  | { type: "CONNECT_SUCCESS" }
  | { type: "RECEIVE_CHUNK"; payload: LectureChunk }
  | { type: "STREAM_END"; payload: string }
  | { type: "ERROR"; payload: string };

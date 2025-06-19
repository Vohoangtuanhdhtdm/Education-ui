import { z } from "zod";

// --- Định nghĩa Schema với Zod ---
export const formSchema = z.object({
  role: z.enum(["student", "teacher"], {
    required_error: "Vui lòng chọn một vai trò.",
  }),
});

// --- Định nghĩa Type từ Schema ---
export type RoleFormValues = z.infer<typeof formSchema>;

// --- Định nghĩa Props cho Component ---
export interface RoleSelectionModalProps {
  isOpen: boolean; // Trạng thái đóng/mở modal
  onClose: () => void; // Callback khi modal đóng
  onSubmitRole: (role: "student" | "teacher") => Promise<void>; // Callback khi gửi form thành công
}

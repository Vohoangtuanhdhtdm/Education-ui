import { useState, useMemo } from "react";
import type { Tool } from "@/components/module/managementTools/managementToolsData";
/**
 * @description Một custom hook để quản lý logic lọc và tìm kiếm cho một danh sách các công cụ.
 * @param {Tool[]} initialTools - Mảng chứa danh sách tất cả các công cụ ban đầu.
 * @returns {object} Trả về một object chứa state, các hàm cập nhật state, và danh sách công cụ đã được lọc.
 */
export function useManagementTools(initialTools: Tool[]) {
  // State để lưu trữ danh mục (category) đang được chọn để lọc. Mặc định là "All".
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State để lưu trữ từ khóa tìm kiếm mà người dùng nhập vào. Mặc định là chuỗi rỗng.
  const [searchTerm, setSearchTerm] = useState("");

  // Sử dụng useMemo để tối ưu hóa hiệu năng.
  // Việc lọc danh sách sẽ chỉ được tính toán lại khi một trong các dependencies
  // [initialTools, selectedCategory, searchTerm] thay đổi.
  const filteredTools = useMemo(() => {
    // Bắt đầu lọc từ danh sách công cụ ban đầu.
    return initialTools.filter((tool) => {
      // Điều kiện 1: Kiểm tra xem công cụ có thuộc danh mục đang chọn hay không.
      // Luôn trả về true nếu danh mục được chọn là "All".
      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;
      // Chuẩn bị cho điều kiện 2: Chuyển từ khóa tìm kiếm về chữ thường để tìm kiếm không phân biệt hoa/thường.
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      // Điều kiện 2: Kiểm tra xem từ khóa tìm kiếm có xuất hiện trong tiêu đề hoặc mô tả của công cụ không.
      const matchesSearch =
        tool.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        tool.description.toLowerCase().includes(lowerCaseSearchTerm);
      // Một công cụ sẽ được giữ lại trong danh sách kết quả nếu nó thỏa mãn CẢ HAI điều kiện trên.
      return matchesCategory && matchesSearch;
    });
  }, [initialTools, selectedCategory, searchTerm]); // Mảng dependencies của useMemo

  // Trả về một object chứa các state, các hàm cập nhật state, và mảng kết quả đã lọc.
  // Điều này cho phép component sử dụng hook này có thể truy cập và điều khiển logic.
  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredTools,
  };
}

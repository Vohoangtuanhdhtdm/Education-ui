import type { AppRole } from "@/type/constants/roles";
import { useUser } from "@clerk/clerk-react";

/**
 * Custom hook cung cấp các tiện ích để kiểm tra vai trò và quyền hạn của người dùng hiện tại.
 * Dữ liệu vai trò được lấy từ `publicMetadata` của đối tượng User trong Clerk.
 * @returns {object} Một đối tượng chứa danh sách vai trò của người dùng và các hàm kiểm tra.
 */
export const useAuthorization = () => {
  const { user } = useUser();

  /**
   * Danh sách các vai trò mà người dùng hiện tại đang sở hữu.
   * Mặc định là một mảng rỗng nếu người dùng không có vai trò nào hoặc dữ liệu chưa được tải.
   * @type {AppRole[]}
   */
  const userRoles = (user?.publicMetadata?.roles as AppRole[]) || [];

  /**
   * Kiểm tra xem người dùng có sở hữu một vai trò cụ thể hay không.
   * @param {AppRole} requiredRole - Vai trò cần kiểm tra.
   * @returns {boolean} `true` nếu người dùng có vai trò đó, ngược lại là `false`.
   */
  const hasRole = (requiredRole: AppRole): boolean => {
    return userRoles.includes(requiredRole);
  };

  /**
   * Kiểm tra xem người dùng có sở hữu ÍT NHẤT MỘT trong số các vai trò được yêu cầu hay không.
   * @param {AppRole[]} requiredRoles - Mảng các vai trò được yêu cầu.
   * @returns {boolean} `true` nếu người dùng có ít nhất một trong các vai trò đó.
   * Đặc biệt: Trả về `true` nếu mảng `requiredRoles` rỗng, vì điều này có nghĩa là
   * không có yêu cầu vai trò nào được đặt ra.
   */
  const hasAnyRole = (requiredRoles: AppRole[]): boolean => {
    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // Không yêu cầu vai trò nào -> cho phép
    }
    return requiredRoles.some((role) => userRoles.includes(role));
  };

  /**
   * Kiểm tra xem người dùng có sở hữu TẤT CẢ các vai trò được yêu cầu hay không.
   * @param {AppRole[]} requiredRoles - Mảng các vai trò được yêu cầu.
   * @returns {boolean} `true` nếu người dùng có tất cả các vai trò đó.
   * Tự động trả về `true` nếu mảng `requiredRoles` rỗng.
   */
  const hasAllRoles = (requiredRoles: AppRole[]): boolean => {
    // `every` trên một mảng rỗng sẽ tự động trả về `true`, nên không cần kiểm tra mảng rỗng một cách tường minh.
    // Điều này phù hợp với logic: "người dùng có tất cả các vai trò trong một danh sách rỗng không?" -> Có.
    return requiredRoles?.every((role) => userRoles.includes(role)) ?? true;
  };

  return {
    userRoles,
    hasRole,
    hasAnyRole,
    hasAllRoles,
  };
};

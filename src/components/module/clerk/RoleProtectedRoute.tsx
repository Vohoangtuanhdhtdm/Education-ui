import { useAuthorization } from "@/hooks/useAuthorization";
import type { AppRole } from "@/type/constants/roles";
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { LoadingScreen } from "../loading/LoadingScreen";
import { AccessDenied } from "../error/AccessDenied";

export const RoleProtectedRoute = ({
  children,
  allowedRoles, // Danh sách các vai trò được phép truy cập route này
}: {
  children: React.ReactNode;
  allowedRoles: AppRole[];
}) => {
  const { isSignedIn, isLoaded } = useUser();
  const { hasAnyRole, userRoles } = useAuthorization();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  if (allowedRoles.length > 0 && !hasAnyRole(allowedRoles)) {
    toast.error(
      `Bạn không có quyền truy cập trang này. Vai trò của bạn: ${userRoles.join(", ")}`
    );

    return <AccessDenied />;
  }

  return <>{children}</>;
};

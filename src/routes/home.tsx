import { RoleProtectedRoute } from "@/components/module/clerk/RoleProtectedRoute";
import { ROLES } from "@/type/constants/roles";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <RoleProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <div>Chào admin!</div>
      </RoleProtectedRoute>
    </div>
  );
}

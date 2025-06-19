import UserDashboardPage from "@/components/module/modal/UserDashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <UserDashboardPage />
    </div>
  );
}

import TeacherDashboardPage from "@/components/module/teacher/dashboard/TeacherDashboardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/_teacher/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <TeacherDashboardPage />
    </div>
  );
}

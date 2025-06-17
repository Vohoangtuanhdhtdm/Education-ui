import { TeacherSidebar } from "@/components/module/sideBar/TeacherSidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/_teacher")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen w-full">
      <TeacherSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

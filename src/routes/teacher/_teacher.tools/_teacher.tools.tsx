import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/_teacher/tools/_teacher/tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen w-full">
      <Link to="/teacher/tools/tools/createLesson">Tạo bài giảng</Link>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

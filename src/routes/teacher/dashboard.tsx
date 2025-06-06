import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <Link to="/teacher/tools">
        <button style={{ marginRight: "8px" }}>Công cụ cho giáo viên</button>
      </Link>
    </div>
  );
}

import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/tools/_tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2>Tools</h2>
      {/* Navigation buttons */}

      <Outlet />
    </div>
  );
}

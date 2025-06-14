import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/tools/_tools")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

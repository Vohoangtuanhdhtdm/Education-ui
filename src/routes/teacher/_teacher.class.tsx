import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/_teacher/class")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/teacher/_teacher/class"!</div>;
}

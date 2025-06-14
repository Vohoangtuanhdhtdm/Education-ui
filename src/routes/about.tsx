import { SSE } from "@/components/module/SSE";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <h1>Test SSE</h1>
      <SSE />
    </div>
  );
}

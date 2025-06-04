import { SSE } from "@/components/module/SSE";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test-SSE")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SSE />
    </div>
  );
}

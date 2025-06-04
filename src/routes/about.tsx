import { TestCarousel } from "@/components/module/TestCarousel";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      <TestCarousel />
    </div>
  );
}

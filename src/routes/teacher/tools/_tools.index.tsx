import { ManagementTools } from "@/pages/ManagementTools";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/teacher/tools/_tools/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ManagementTools />;
}

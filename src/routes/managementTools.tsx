import { ManagementTools } from "@/pages/ManagementTools";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/managementTools")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ManagementTools />;
}

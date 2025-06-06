import { Home } from "@/components/module/landing/home/Home";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Home />;
}

import Example from "@/components/llm-ui/Example";
import GeminiChat from "@/components/llm-ui/GeminiChat";
import { SSE } from "@/components/module/SSE";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-2">
      {/* <h1>Test SSE</h1>
      <SSE /> */}
      {/* <Example /> */}
      <GeminiChat />
    </div>
  );
}

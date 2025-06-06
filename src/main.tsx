import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    auth: undefined!, // Sẽ được cung cấp bởi component bên dưới
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
// Create a client
const queryClient = new QueryClient();

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Trong component gốc render RouterProvider
function App() {
  const auth = useAuth(); // Lấy auth context từ ClerkProvider

  return <RouterProvider router={router} context={{ auth }} />;
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <App />
          {/* Component App này sẽ cung cấp auth context cho RouterProvider */}
          <Toaster position="bottom-right" reverseOrder={false} />
        </QueryClientProvider>
      </ClerkProvider>
    </StrictMode>
  );
}

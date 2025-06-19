import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { setupWorker } from "msw/browser";
import { http, HttpResponse } from "msw";

const worker = setupWorker(
  http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
    return HttpResponse.json(null, { status: 500 });
  }),
);

await worker.start({
  onUnhandledRequest: "bypass",
});

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById("app")!);
root.render(<RouterProvider router={router} />);

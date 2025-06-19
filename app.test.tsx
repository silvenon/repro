import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { routes } from "./routes";
import { createRoutesStub } from "react-router";

const server = setupServer(
  http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
    return HttpResponse.json(null, { status: 500 });
  }),
);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error",
  });
});

afterAll(() => {
  server.close();
});

test("render with error", async () => {
  const AppStub = createRoutesStub(routes);
  render(<AppStub />);
  await screen.findByText("Error occurred!");
});

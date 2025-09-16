import { createRoutesStub } from "react-router";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("middleware in routes stub", () => {
  const AppStub = createRoutesStub([
    {
      path: "/",
      Component: () => <h1>Hello world!</h1>,
      ErrorBoundary: () => <h1>Hello error!</h1>,
      middleware: [
        () => {
          console.count("MIDDLEWARE");
          throw new Response("Internal Server Error", { status: 500 });
        },
      ],
    },
  ]);
  render(<AppStub />);
  expect(screen.getByRole("heading", { name: "Hello error!" })).toBeVisible();
});

import { type RouteObject, Await, useLoaderData } from "react-router";

async function loader() {
  return {
    data: await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => response.json(),
    ),
  };
}

function Home() {
  useLoaderData<typeof loader>();
  return <div>Hello world!</div>;
}

export const routes = [
  {
    index: true,
    // get rid of warning during testing
    HydrateFallback: import.meta.env.MODE === "test" ? () => null : undefined,
    loader,
    Component: () => <Home />,
    ErrorBoundary: () => <div>Error occurred!</div>,
  },
] satisfies RouteObject[];

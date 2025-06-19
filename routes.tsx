import { Suspense } from "react";
import { type RouteObject, Await, useLoaderData } from "react-router";

function loader() {
  return {
    data: fetch("https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => response.json(),
    ),
  };
}

export const routes = [
  {
    index: true,
    // get rid of warning during testing
    HydrateFallback: import.meta.env.MODE === "test" ? () => null : undefined,
    loader,
    Component: () => {
      const { data } = useLoaderData<typeof loader>();
      return (
        <Suspense>
          <Await resolve={data}>
            <div>Hello world!</div>
          </Await>
        </Suspense>
      );
    },
    ErrorBoundary: () => {
      return <div>Error occurred!</div>;
    },
  },
] satisfies RouteObject[];

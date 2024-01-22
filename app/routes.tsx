import { Outlet, type RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <h1>Hello!</h1>,
      },
    ],
  },
];

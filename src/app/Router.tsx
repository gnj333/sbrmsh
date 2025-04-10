import { RouterProvider } from "atomic-router-react";
import { router, RoutesView } from "../pages";
import { Suspense } from "react";

export default () => (
  <Suspense fallback={<div></div>}>
    <RouterProvider router={router}>
      <RoutesView />
    </RouterProvider>
  </Suspense>
);

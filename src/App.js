import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

// lazy component, loads only when we will render it. and bundles seperately
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* where dynamic component loads */}
      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    // route to load component
    path: "/",
    // to load component
    element: <AppLayout />,
    // to load error component
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          // to load lazy route
          <Suspense fallback={<h1>loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

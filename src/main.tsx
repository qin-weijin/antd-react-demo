import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Components
import ErrorPage from "./pages/error-page";
import Root from "./routes/root";
import Home from "./routes/home";
import Bookmark from "./routes/bookmark";
// import Jottings from "./routes/jottings";
// import Classification from "./routes/classification";
// import Label from "./routes/label";
// import File from "./routes/file";
// import About from "./routes/about";
// CSS
import '@/assets/scss/index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "bookmark",
        element: <Bookmark />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
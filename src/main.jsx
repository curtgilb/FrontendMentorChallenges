import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contents from "./Contents";
import "./main.css";
import Summary from "./pages/summaryResults/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contents />,
  },
  {
    path: "/resultssummary",
    element: <Summary />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

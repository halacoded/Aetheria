import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

import SpacePage from "./pages/SpacePage";
import SpaceStaion from "./pages/SpaceStaion";
import Bedroom from "./pages/Bedroom";
import GreenRoom from "./pages/GreenRoom";
import Library from "./pages/Library";
import Hall from "./pages/Hall";
import "./index.css";
import Lab from "./pages/Lab";
import Core from "./pages/Core";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SpacePage",
    element: <SpacePage />,
  },
  {
    path: "/SpaceStaion",
    element: <SpaceStaion />,
  },
  {
    path: "/Bedroom",
    element: <Bedroom />,
  },
  {
    path: "/GreenRoom",
    element: <GreenRoom />,
  },
  {
    path: "/Library",
    element: <Library />,
  },
  {
    path: "/Hall",
    element: <Hall />,
  },
  {
    path: "/Lab",
    element: <Lab />,
  },
  {
    path: "/Core",
    element: <Core />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();

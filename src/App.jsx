import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import VideosLayout from "./components/layout/VideosLayout/VideosLayour";

const router = createBrowserRouter([
  { path: "/", element: <MainLayout /> },
  { path: "/videos", element: <VideosLayout /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

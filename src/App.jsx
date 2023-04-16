import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout/MainLayout";
import VideosLayout from "./components/layout/VideosLayout/VideosLayour";

import HashLoader from "react-spinners/HashLoader";

const router = createBrowserRouter([
  { path: "/", element: <MainLayout /> },
  { path: "/videos", element: <VideosLayout /> },
]);

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <HashLoader
            color={"#1c6758"}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="loading__item"
          />
          <p className="loading__p">
            Portafolio <br />
            <span className="loading__span">Ana Manuela Ramirez</span>
          </p>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;

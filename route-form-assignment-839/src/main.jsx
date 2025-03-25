import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavPage from "./pages/FavouritePage.jsx";
import FavDetailPage from "./pages/FavouriteDetailPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import NotFound from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/fav",
        element: <FavPage />,
      },
      {
        path: "/fav/:id",
        element: <FavDetailPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
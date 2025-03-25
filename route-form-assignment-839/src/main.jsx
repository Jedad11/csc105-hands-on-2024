import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
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
    element: <App/>, // Render the App component
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/fav",
        element:<FavPage/>,
        children:[
          {
            path:"/favoriteDetail",
            element:<FavDetailPage/>
          },
        ]
      }
      
    ]
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/*",
    element:<NotFound/>
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
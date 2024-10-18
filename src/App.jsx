import React from "react"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlogs from "./pages/CreateBlogs";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login"; // Import Login
import Layout from "./Layout"; // Import the layout component

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for these routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/create", element: <CreateBlogs /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

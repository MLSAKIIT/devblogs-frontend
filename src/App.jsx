import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CreateBlogs from "./pages/CreateBlogs";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateBlogs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;

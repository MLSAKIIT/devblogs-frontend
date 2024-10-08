import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import CreateBlogs from "./pages/CreateBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateBlogs />,
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

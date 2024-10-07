import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

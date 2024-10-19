import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";
import Home from "./pages/Home";
import CreateBlogs from "./pages/CreateBlogs";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login"; // Import Login
import Register from "./pages/Register"; //Import Register
import Layout from "./Layout"; // Import the layout component

export const ThemeContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for these routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/create", element: <CreateBlogs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
export { ThemeProvider };

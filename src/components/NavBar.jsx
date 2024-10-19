import { useContext } from "react";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";
import Sun from "./svgs/Sun";
import Moon from "./svgs/Moon";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <nav
      className={`fixed z-50 w-full flex justify-between items-center px-4 sm:px-12 h-20 py-4 ${
        theme == "dark" ? "bg-secondary text-white" : "bg-white text-black"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        className="h-14 sm:h-16"
        src="/assets/mlsa-logo.png"
        alt="Logo"
      />

      <div className="flex">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="theme toggler"
          className={`flex h-10 w-11 mr-3 sm:mr-5 items-center justify-center rounded-lg border duration-300 hover:bg-stroke sm:flex ${
            theme == "light"
              ? "border-stroke bg-white"
              : "bg-dark-2 border-dark-2"
          }`}
        >
          {theme == "dark" ? (
            <Sun className="fill-white" />
          ) : (
            <Moon className="fill-primary" />
          )}
        </button>

        {/* Create Blogs Button */}
        <button
          onClick={() => navigate("/create")}
          className="w-fit rounded-xl text-primary text-sm sm:text-base border border-primary px-2 sm:px-3 font-semibold h-10 flex items-center justify-center mr-2 sm:mr-3 duration-200 hover:opacity-80"
        >
          Create Blogs
        </button>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="w-fit rounded-xl text-white bg-primary text-sm sm:text-base border border-primary px-2 sm:px-3 font-semibold h-10 flex items-center justify-center duration-200 hover:opacity-80"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

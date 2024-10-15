import { useEffect, useState } from "react";
import Sun from "./svgs/Sun";
import Moon from "./svgs/Moon";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load saved theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Toggle dark mode and save the preference to localStorage
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <nav
      className={`fixed z-50 w-full flex justify-between items-center px-12 h-20 py-4 ${
        isDarkMode ? "bg-secondary text-white" : "bg-white text-black"
      }`}
    >
      <img className="h-16" src="/assets/mlsa-logo.png" alt="Logo" />

      <div className="flex ">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          aria-label="theme toggler"
          className={`flex h-10 w-11 mr-5 items-center justify-center rounded-lg border  duration-300 hover:bg-stroke sm:flex ${
            !isDarkMode ? " border-stroke bg-white" : "bg-dark-2 border-dark-2"
          }`}
        >
          {isDarkMode ? (
            <Sun className="fill-white" />
          ) : (
            <Moon className="fill-primary" />
          )}
        </button>

        <button className="w-fit rounded-xl text-primary text-base border border-primary px-3 font-semibold h-10 flex items-center justify-center mr-3 duration-200 hover:opacity-80">
          Create Blogs
        </button>

        <button className="w-fit rounded-xl text-white bg-primary text-base border border-primary px-3 font-semibold h-10 flex items-center justify-center duration-200 hover:opacity-80">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

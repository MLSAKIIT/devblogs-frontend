import { useEffect, useState } from "react";

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
    <nav className={`flex justify-between items-center px-12 h-24 py-4 ${isDarkMode ? 'bg-secondary text-white' : 'bg-white text-black'}`}>
      <img className="h-16" src="/assets/mlsa-logo.png" alt="Logo" />

      <div className="flex gap-5">
        <button className="w-fit rounded-md text-white bg-primary text-xl px-3 font-semibold py-2 h-fit">
          Login
        </button>
        <button className="w-fit rounded-md text-white bg-primary text-xl px-3 font-semibold py-2 h-fit">
          Create Blogs
        </button>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="w-fit rounded-md text-white bg-primary text-xl px-3 font-semibold py-2 h-fit"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

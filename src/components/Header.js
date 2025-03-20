import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [btnName, setButtonName] = useState("Login");

  // Apply dark mode class to the <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="w-12" src={LOGO_URL} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Cart
            </Link>
          </div>

          <div>
            {/* Login Button */}
            <button
              className="m-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              onClick={() =>
                setButtonName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
            {/* Dark Mode Toggle */}
            <button
              className="p-2 ml-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

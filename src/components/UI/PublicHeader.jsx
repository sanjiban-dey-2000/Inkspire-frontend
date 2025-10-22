import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiPenTool } from "react-icons/fi";

const PublicHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/70 dark:bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight group"
          >
            <FiPenTool className="text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Inkspire
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Blogs", path: "/blogs" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative group text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition ${
                    isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                  }`
                }
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
          </div>

          {/* Write Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition"
            >
              ✍️ Write
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-4 space-y-4 font-medium animate-slideDown">
          {[
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition"
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-[1.03] transition"
          >
            ✍️ Write a Post
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PublicHeader;

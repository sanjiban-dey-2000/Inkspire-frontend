import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const PrivateHeader = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Logout function (for localStorage token)
  const handleLogout = () => {
    localStorage.removeItem("token"); // clear stored token
    toast.success("Logged out successfully!");
    navigate("/login"); // redirect to login
  };

  // Close profile menu if clicked outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navItems = [
    { name: "Dashboard", path: "/private/dashboard" },
    { name: "My Posts", path: "/private/my-posts" },
    { name: "Create", path: "/private/create" },
    { name: "News", path: "/private/news" },
  ];

  return (
    <nav className="bg-white/70 dark:bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Brand Logo */}
          <Link
            to="/private/dashboard"
            className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight group"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Inkspire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            {navItems.map((item) => (
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

          {/* Profile Icon */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white focus:outline-none hover:scale-105 transition"
            >
              <FiUser size={20} />
            </button>

            {/* Profile Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 animate-fadeIn">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 flex items-center space-x-2 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 transition"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </div>
            )}
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
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Logout Button in Mobile View */}
          <button
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
            className="block w-full text-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-[1.03] transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default PrivateHeader;

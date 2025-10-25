import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PrivateHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <header className="bg-gray-900 text-white flex justify-between items-center p-4 shadow-md">
      {/* Logo / App Name */}
      <div className="text-2xl font-bold">
        <Link to="/private/dashboard">Inkspire</Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/private/dashboard" className="hover:text-indigo-400 transition">
          Dashboard
        </Link>
        <Link to="/private/blogs" className="hover:text-indigo-400 transition">
          My Blogs
        </Link>
        <Link to="/private/profile" className="hover:text-indigo-400 transition">
          Profile
        </Link>
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </header>
  );
};

export default PrivateHeader;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-300 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[8rem] font-extrabold text-cyan-500 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl font-semibold text-gray-200 mb-4"
      >
        Oops! Page not found.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-400 text-center max-w-md mb-8"
      >
        The page you’re looking for might have been removed, renamed, or doesn’t exist anymore.
      </motion.p>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-700 transition"
        >
          <FaArrowLeft /> Go Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/private/dashboard")}
          className="flex items-center gap-2 px-5 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
        >
          <FaHome /> Go Home
        </motion.button>
      </div>
    </div>
  );
};

export default ErrorPage;

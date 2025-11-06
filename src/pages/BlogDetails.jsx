import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../services/AxiosInstance";
import { formatDistanceToNow } from "date-fns";
import { FaArrowLeft, FaUser, FaRegClock } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const res = await getBlogById(id);
      setBlog(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to load blog!");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (!blog)
    return <p className="text-gray-400 text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.span
          whileHover={{ x: -5 }}
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center text-cyan-400 mb-6 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back to Featured Posts
        </motion.span>

        {/* Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-3xl shadow-[0_0_40px_-10px_rgba(0,255,255,0.15)] p-6"
        >
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-72 object-cover rounded-2xl mb-6 border border-gray-800 shadow-lg"
          />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,255,255,0.2)]"
          >
            {blog.title}
          </motion.h1>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-gray-500 mb-6 text-sm">
            <span className="flex items-center gap-2">
              <FaUser className="text-cyan-400" />{" "}
              {blog.user?.username || "Anonymous"}
            </span>
            <span className="flex items-center gap-2">
              <FaRegClock className="text-cyan-400" />
              {blog.createdAt
                ? formatDistanceToNow(new Date(blog.createdAt), {
                    addSuffix: true,
                  })
                : "Some time ago"}
            </span>
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg"
          >
            {blog.body}
          </motion.p>

          {/* Floating Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;

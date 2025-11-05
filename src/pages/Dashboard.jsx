import React, { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaRegClock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { allBlogs } from "../services/AxiosInstance";
import { formatDistanceToNow } from "date-fns";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  const getAllBlogs = async () => {
    try {
      const res = await allBlogs();
      setPosts(res.data);
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong. Please try again!!!");
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Stories that <span className="text-cyan-400">Inspire Minds</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Explore deep thoughts, creativity, and inspiration through powerful words.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900 border border-gray-800 rounded-full py-3 px-10 focus:outline-none focus:border-cyan-500 placeholder-gray-500 text-sm"
          />
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
          Featured Posts
        </h3>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:border-cyan-500 hover:shadow-cyan-500/20 transition"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <span className="text-xs uppercase text-cyan-400 font-semibold">
                    {post.category || "General"}
                  </span>

                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {post.title}
                  </h4>

                  {/* Blog Preview */}
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                    {post.body?.length > 120
                      ? post.body.slice(0, 120) + "..."
                      : post.body || "No content available."}
                  </p>

                  {/* Footer Info */}
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-cyan-400" />
                      {post.user?.username || "Anonymous"}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRegClock className="text-cyan-400" />
                      {post.createdAt
                        ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
                        : "Some time ago"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

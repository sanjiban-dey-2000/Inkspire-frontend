import React, { useEffect, useState } from "react";
import { FaSearch, FaRegClock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { allBlogs, searchBlogs } from "../services/AxiosInstance";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all blogs
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await allBlogs();
      setPosts(res.data);
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs by search query (debounced)
  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (search.trim().length > 0) {
        try {
          setLoading(true);
          const res = await searchBlogs(search);
          setPosts(res.data);
        } catch (error) {
          console.error(error);
          toast.error("Error fetching search results!");
        } finally {
          setLoading(false);
        }
      } else {
        getAllBlogs(); // Load all blogs if search is empty
      }
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6"
      >
        <h2 className="text-5xl font-bold text-white mb-4">
          Stories that <span className="text-cyan-400">Inspire Minds</span>
        </h2>
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
            className="w-full bg-gray-900 border border-gray-800 rounded-full py-3 px-10 focus:outline-none focus:border-cyan-500 placeholder-gray-500 text-sm transition"
          />
        </div>
      </motion.section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-cyan-400 mb-6 text-center"
        >
          {search ? "Search Results" : "Featured Posts"}
        </motion.h3>

        {loading ? (
          <p className="text-center text-gray-500 animate-pulse">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts found.</p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:border-cyan-500 hover:shadow-cyan-500/20 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <Link to={`/private/blog/${post.id}`}>
                  <div className="relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-5">
                    <span className="text-xs uppercase text-cyan-400 font-semibold tracking-wide">
                      {post.category || "General"}
                    </span>

                    <h4 className="mt-2 text-lg font-semibold text-white line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                      {post.body?.length > 120
                        ? post.body.slice(0, 120) + "..."
                        : post.body || "No content available."}
                    </p>

                    <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <FaUser className="text-cyan-400" />
                        {post.user?.username || "Anonymous"}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaRegClock className="text-cyan-400" />
                        {post.createdAt
                          ? formatDistanceToNow(new Date(post.createdAt), {
                              addSuffix: true,
                            })
                          : "Some time ago"}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

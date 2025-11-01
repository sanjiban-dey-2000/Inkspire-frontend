import React, { useState } from "react";
import { FaSearch, FaHeart, FaRegClock, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      title: "Finding Creativity in Chaos",
      author: "Sanjiban Dey",
      time: "5 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      category: "Inspiration",
    },
    {
      id: 2,
      title: "The Power of Consistent Writing",
      author: "Sanjiban Dey",
      time: "6 min read",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
      category: "Productivity",
    },
    {
      id: 3,
      title: "Why Creativity Needs Solitude",
      author: "Sanjiban Dey",
      time: "4 min read",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      category: "Mindset",
    },
    {
      id: 4,
      title: "Building Digital Empires with Words",
      author: "Sanjiban Dey",
      time: "7 min read",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      category: "Writing",
    },
  ];

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
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <span className="text-xs uppercase text-cyan-400 font-semibold">
                  {post.category}
                </span>
                <h4 className="mt-2 text-lg font-semibold text-white">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <FaUser /> {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegClock /> {post.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

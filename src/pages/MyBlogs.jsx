import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaRegClock, FaUser } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getMyBlogs, deleteBlogById } from "../services/AxiosInstance";
import { formatDistanceToNow } from "date-fns";

const MyBlogs = () => {
  const [myPosts, setMyPosts] = useState([]);
  const navigate = useNavigate();

  // Fetch user blogs
  const fetchMyPosts = async () => {
    try {
      const res = await getMyBlogs();
      setMyPosts(res.data);
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to load your posts!");
    }
  };

  // Delete post
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await deleteBlogById(id);
      toast.success("Post deleted successfully!");
      setMyPosts(myPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to delete post!");
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-10"
        >
          My <span className="text-cyan-400">Posts</span>
        </motion.h2>

        {myPosts.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:border-cyan-500 hover:shadow-cyan-500/20 transition relative"
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

                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                    {post.body?.length > 120
                      ? post.body.slice(0, 120) + "..."
                      : post.body || "No content available."}
                  </p>

                  <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FaUser className="text-cyan-400" />
                      {post.user?.username || "You"}
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

                  {/* Edit/Delete Buttons */}
                  <div className="flex justify-between mt-5">
                    <button
                      onClick={() => navigate(`/edit-blog/${post.id}`)}
                      className="flex items-center gap-2 text-cyan-400 border border-cyan-400 px-3 py-1 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="flex items-center gap-2 text-red-400 border border-red-400 px-3 py-1 rounded-lg text-sm hover:bg-red-400 hover:text-black transition"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;

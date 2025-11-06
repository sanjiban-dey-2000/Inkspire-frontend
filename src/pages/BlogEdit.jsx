import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { getBlogById, updateBlogById } from "../services/AxiosInstance";

const BlogEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(true);

  // ✅ Fetch existing blog details
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        setPost({
          title: res.data.title,
          body: res.data.body,
        });
      } catch (error) {
        toast.error("Failed to fetch blog details!");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // ✅ Update blog post
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateBlogById(id, post);
      toast.success("Post updated successfully!");
      navigate("/private/my-posts"); // adjust path if needed
    } catch (error) {
      toast.error("Failed to update post!");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-400">
        Loading post details...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-cyan-400 mb-6"
        >
          Edit Blog Post
        </motion.h2>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Content</label>
            <textarea
              name="body"
              rows="8"
              value={post.body}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            Update Post
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default BlogEdit;

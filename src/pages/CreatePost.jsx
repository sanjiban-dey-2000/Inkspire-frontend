import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { createBlog } from "../services/AxiosInstance"; // You'll define this API call next
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    category: "",
    body: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.body /*|| !form.category*/) {
      toast.error("Please fill in all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("body", form.body);
    if (image) formData.append("image", image);

    try {
      setLoading(true);
      await createBlog(formData);
      toast.success("Blog created successfully!");
      navigate("/private/my-posts");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create blog post!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 flex justify-center items-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-gray-900/70 border border-gray-800 rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
          Create a New Blog ✍️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block mb-2 text-gray-400">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
              placeholder="Enter your blog title..."
            />
          </div>

          {/* Category */}
          {/*<div>
            <label className="block mb-2 text-gray-400">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
              placeholder="e.g., Motivation, Lifestyle, Tech..."
            />
          </div>*/}

          {/* Body */}
          <div>
            <label className="block mb-2 text-gray-400">Body</label>
            <textarea
              name="body"
              value={form.body}
              onChange={handleChange}
              rows="8"
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-cyan-400"
              placeholder="Write your story here..."
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition">
            <label
              htmlFor="image"
              className="flex flex-col items-center cursor-pointer"
            >
              <FaCloudUploadAlt className="text-4xl text-cyan-400 mb-2" />
              <p className="text-gray-400">
                {image ? image.name : "Click to upload an image"}
              </p>
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePost;

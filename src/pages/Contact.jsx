import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Have a question or suggestion? Reach out to us and we’ll respond as
          soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">Our Info</h2>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-indigo-400 w-6 h-6 mr-4" />
              <span className="text-gray-200 text-lg">123 Inkspire Street, Creativity City, India</span>
            </div>
            <div className="flex items-center mb-6">
              <FaPhone className="text-indigo-400 w-6 h-6 mr-4" />
              <span className="text-gray-200 text-lg">+91 86951 88534</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-indigo-400 w-6 h-6 mr-4" />
              <span className="text-gray-200 text-lg">sanjibandey2000@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      description:
        "Explore how AI, Web3, and next-gen frameworks are reshaping the digital landscape.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS for Modern UI Design",
      description:
        "Learn how to craft beautiful, responsive layouts effortlessly with Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "React Best Practices for Scalable Frontends",
      description:
        "Tips, tricks, and patterns every React developer should know to build production-ready apps.",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Inkspire
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Dive into a world of ideas, insights, and inspiration — written by
          creators who dare to think differently.
        </p>
        <Link
          to="/blogs"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Explore Blogs
        </Link>
      </section>

      {/* Featured Blogs */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
          Featured Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden border border-gray-700"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-indigo-400 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Have a Story to Share?
        </h2>
        <p className="text-lg mb-6">
          Join our creative community and start inspiring others today.
        </p>
        <Link
          to="/create"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Write a Blog
        </Link>
      </section>
    </div>
  );
};

export default Home;

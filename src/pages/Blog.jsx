import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Development", "AI", "Science", "Geography", "History", "Fiction"];

  const posts = [
    { id: 1, title: "Building Scalable Web Apps with React and Node.js", description: "Learn the key architectural decisions and performance optimizations for full-stack scalability.", image: "https://images.unsplash.com/photo-1581091215367-59ab6b126b88?auto=format&fit=crop&w=800&q=60", tag: "Development" },
    { id: 2, title: "Embracing the Dark Mode: UI/UX Principles for Modern Apps", description: "Dark mode isn’t just an aesthetic — it’s a usability trend driven by design psychology.", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=60", tag: "Design" },
    { id: 3, title: "JavaScript ES2025 Features You Should Know", description: "Explore the upcoming changes that make JavaScript more powerful and developer-friendly.", image: "https://images.unsplash.com/photo-1590608897129-79da98d15972?auto=format&fit=crop&w=800&q=60", tag: "JavaScript" },
    { id: 4, title: "Why Tailwind CSS is Revolutionizing Frontend Development", description: "Discover how utility-first design accelerates workflow and enforces consistency.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60", tag: "CSS" },
    { id: 5, title: "AI in Web Development: The Next Frontier", description: "AI is changing how we code, test, and optimize — here’s what you need to know.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60", tag: "AI" },
    { id: 6, title: "The Beauty of Human Curiosity", description: "Exploring how curiosity drives innovation, discovery, and creativity across all fields.", image: "Curious.webp", tag: "Science" },
    { id: 7, title: "Mastering React in 2025", description: "A complete guide to building high-performance web apps using React and Tailwind CSS.", image: "https://source.unsplash.com/800x600/?react,webdevelopment", tag: "Development" },
    { id: 8, title: "Backend Brilliance: Node.js & Express", description: "Learn how to build scalable APIs and microservices using Node.js and Express.", image: "https://source.unsplash.com/800x600/?nodejs,backend", tag: "Development" },
    { id: 9, title: "Clean Code: Writing for the Future", description: "Why writing readable, maintainable code is more valuable than writing clever code.", image: "https://source.unsplash.com/800x600/?coding,clean-code", tag: "Development" },
    { id: 10, title: "AI and the Art of Creation", description: "How artificial intelligence is transforming art, music, and human creativity.", image: "AI1.jpg", tag: "AI" },
    { id: 11, title: "Understanding Large Language Models", description: "A simplified guide to how GPT-style models think, learn, and generate text.", image: "https://source.unsplash.com/800x600/?artificialintelligence,neuralnetwork", tag: "AI" },
    { id: 12, title: "Ethics in the Age of AI", description: "Exploring the ethical challenges and moral responsibilities of building intelligent machines.", image: "https://source.unsplash.com/800x600/?ai,ethics", tag: "AI" },
    { id: 13, title: "The Quantum Revolution", description: "A glimpse into how quantum computing could reshape technology and science forever.", image: "quantum.webp", tag: "Science" },
    { id: 14, title: "Decoding the Human Genome", description: "How genetics and data science are helping us understand life at its core.", image: "genome.jpg", tag: "Science" },
    { id: 15, title: "The Secrets of Deep Space", description: "Journey through galaxies to uncover mysteries of dark matter and cosmic evolution.", image: "DeepSpace.jpg", tag: "Science" },
    { id: 16, title: "The Changing Face of Earth", description: "How climate change and human activity are reshaping our planet’s geography.", image: "earth.jpg", tag: "Geography" },
    { id: 17, title: "Rivers: The Lifelines of Civilization", description: "Tracing how ancient civilizations flourished along rivers like the Nile and Indus.", image: "river.webp", tag: "Geography" },
    { id: 18, title: "Mountains and Myths", description: "Discover the cultural and spiritual significance of the world's great mountains.", image: "mountains.jpg", tag: "Geography" },
    { id: 19, title: "Echoes of the Ancient World", description: "Uncovering stories from forgotten civilizations that shaped human history.", image: "Echoes.jpg", tag: "History" },
    { id: 20, title: "World Wars: Lessons We Still Learn", description: "Reflecting on the impact of the world wars on technology, politics, and society.", image: "ww.jpg", tag: "History" },
    { id: 21, title: "Revolutions and Rebirths", description: "How revolutions across the globe have transformed nations and ideologies.", image: "/RR.jpg", tag: "History" },
    { id: 22, title: "Dreamers of the Future", description: "A sci-fi story exploring human emotions in a world ruled by AI.", image: "dreamer.jpg", tag: "Fiction" },
    { id: 23, title: "The Lost City Beneath the Waves", description: "An underwater adventure where history meets fantasy.", image: "ruin.jpg", tag: "Fiction" },
    { id: 24, title: "Chronicles of the Forgotten Realm", description: "A tale of courage and destiny in a world of fading magic.", image: "realm.webp", tag: "Fiction" },
  ];

  // Shuffle function
  const shuffleArray = (array) => {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const filteredPosts = shuffleArray(
    posts.filter(
      (post) =>
        (selectedCategory === "All" || post.tag === selectedCategory) &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          Explore Our Blogs
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Discover ideas, tutorials, and insights from all kinds of topics.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-xl border border-gray-700 overflow-hidden transform hover:-translate-y-1 transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-semibold text-indigo-400">
                  {post.tag}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-3 text-gray-100">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No blogs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blog;

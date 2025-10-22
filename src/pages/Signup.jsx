import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Account created for: ${name} (${email})`);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      
      {/* Left Column - Image with Overlay */}
      <div className="hidden md:flex w-2/3 relative rounded-l-3xl overflow-hidden">
        <img
          src="/typing.jpg"
          alt="Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <h2 className="text-4xl font-extrabold text-white text-center">
            Join Inkspire! <br /> Share your ideas and explore endless knowledge.
          </h2>
        </div>
      </div>

      {/* Right Column - Signup Form */}
      <div className="flex w-full md:w-1/3 justify-center items-center px-6 py-16">
        <div className="bg-gray-800 p-10 rounded-3xl shadow-xl w-full">
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
            Sign Up
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Create your account to start exploring and sharing blogs.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-center text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

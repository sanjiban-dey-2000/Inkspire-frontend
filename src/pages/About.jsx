import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
          About Inkspire
        </h1>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Inkspire is a platform for curious minds. From technology to fiction, science to travel, we bring you diverse blogs to inspire your creativity and knowledge.
        </p>

        {/* Our Mission Section */}
        <div className="bg-gray-700 rounded-2xl p-8 mb-10 shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">Our Mission</h2>
          <p className="text-gray-200 text-lg">
            At Inkspire, we aim to connect readers and writers from all walks of life. Our mission is to provide a space where ideas flourish, curiosity is encouraged, and knowledge is shared across all topics imaginable.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="bg-gray-700 rounded-2xl p-8 mb-10 shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-4 text-indigo-400">Our Vision</h2>
          <p className="text-gray-200 text-lg">
            We envision a world where learning never stops. Inkspire is dedicated to offering blogs on a wide range of topics, ensuring that readers can explore new horizons every day.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Founder */}
            <div className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition transform">
              <img
                src="SanjibanDey.jpg"
                alt="Team Member"
                className="mx-auto w-50 h-50 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sanjiban Dey</h3>
              <p className="text-gray-400 mb-3">Founder & Full-Stack Developer</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a href="https://www.linkedin.com/in/sanjibandey2000" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400"><FaLinkedin /></a>
                <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
                <a href="#" className="hover:text-indigo-400"><FaGithub /></a>
              </div>
            </div>

            {/* Finance Expert */}
            <div className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition transform">
              <img
                src="AbirDas.jpg"
                alt="Team Member"
                className="mx-auto w-50 h-50 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Abir Das</h3>
              <p className="text-gray-400 mb-3">Finance & Analytics Expert</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a href="https://www.linkedin.com/in/abir-das-212918183" className="hover:text-indigo-400"><FaLinkedin /></a>
                <a href="https://x.com/AbirDas1211233?t=ihbnWWOm5awY6gu60hp61g&s=08" className="hover:text-indigo-400"><FaTwitter /></a>
              </div>
            </div>

            {/* Community Manager */}
            <div className="bg-gray-900 rounded-xl p-6 text-center hover:scale-105 transition transform">
              <img
                src="Shankha.jpg"
                alt="Team Member"
                className="mx-auto w-50 h-50 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Shankhadeep Das</h3>
              <p className="text-gray-400 mb-3">Community Manager</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <a href="#" className="hover:text-indigo-400"><FaLinkedin /></a>
                <a href="#" className="hover:text-indigo-400"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

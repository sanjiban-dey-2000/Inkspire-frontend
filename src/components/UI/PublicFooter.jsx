import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const PublicFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Inkspire
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Your daily dose of inspiration, creativity, and stories that matter. 
            Read. Write. Inspire.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Writers Hub</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-300 uppercase mb-4">Stay Updated</h3>
          <p className="text-sm mb-3 text-gray-400">Subscribe to our newsletter for the latest posts.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-r-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 py-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Inkspire</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <SocialIcon href="#" Icon={FaFacebookF} color="hover:text-blue-500" />
          <SocialIcon href="#" Icon={FaTwitter} color="hover:text-sky-400" />
          <SocialIcon href="#" Icon={FaInstagram} color="hover:text-pink-500" />
          <SocialIcon href="#" Icon={FaGithub} color="hover:text-gray-300" />
          <SocialIcon href="#" Icon={FaLinkedinIn} color="hover:text-blue-400" />
        </div>
      </div>
    </footer>
  );
};

// Reusable Social Icon component
const SocialIcon = ({ href, Icon, color }) => (
  <a
    href={href}
    className={`text-gray-400 ${color} transition text-lg`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
  </a>
);

export default PublicFooter;

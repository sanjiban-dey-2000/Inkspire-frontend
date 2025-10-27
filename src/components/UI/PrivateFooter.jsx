import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const PrivateFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Inkspire Dashboard
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Empowering creators & thinkers with a seamless content experience.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-sm uppercase text-gray-500 font-semibold mb-3 tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <NavItem text="About" href="#" />
            <NavItem text="Privacy Policy" href="#" />
            <NavItem text="Terms of Service" href="#" />
            <NavItem text="Contact" href="#" />
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-sm uppercase text-gray-500 font-semibold mb-3 tracking-wider">
            Connect
          </h3>
          <div className="flex space-x-5">
            <SocialIcon
              href="https://github.com/"
              Icon={FaGithub}
              color="hover:text-gray-300"
            />
            <SocialIcon
              href="https://linkedin.com/"
              Icon={FaLinkedinIn}
              color="hover:text-blue-400"
            />
            <SocialIcon
              href="https://twitter.com/"
              Icon={FaTwitter}
              color="hover:text-sky-400"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">Inkspire Dashboard</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

// Reusable Nav Item Component
const NavItem = ({ text, href }) => (
  <li>
    <a
      href={href}
      className="hover:text-cyan-400 transition duration-200 text-sm"
    >
      {text}
    </a>
  </li>
);

// Reusable Social Icon Component
const SocialIcon = ({ href, Icon, color }) => (
  <a
    href={href}
    className={`text-gray-400 ${color} transition text-xl`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon />
  </a>
);

export default PrivateFooter;

import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Navbar = ({ onAuthChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Successful:", credentialResponse);

    // Simulating user data for now
    setUser(credentialResponse);
    setIsAuthenticated(true);

    // Notify parent component
    if (typeof onAuthChange === "function") {
      onAuthChange(true);
    }
  };

  const handleLogout = () => {
    googleLogout();
    setIsAuthenticated(false);
    setUser(null);

    // Notify parent component
    if (typeof onAuthChange === "function") {
      onAuthChange(false);
    }
    console.log("Logged out successfully");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold tracking-wide cursor-pointer hover:text-yellow-400 transition duration-300">
          Learn<span className="text-yellow-400">Path</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-yellow-400 transition-colors duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">
              Build your path
            </a>
          </li>
          <li>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
              >
                Sign Out
              </button>
            ) : (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login Failed")}
              />
            )}
          </li>
        </ul>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden bg-blue-800 space-y-4 py-4 text-center text-lg font-medium">
          <li><a href="#home" className="block hover:text-yellow-400 transition-colors duration-300">Home</a></li>
          <li><a href="#about" className="block hover:text-yellow-400 transition-colors duration-300">About</a></li>
          <li><a href="#features" className="block hover:text-yellow-400 transition-colors duration-300">Features</a></li>
          <li><a href="#contact" className="block hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { signInWithPopup, signOut, googleProvider, auth } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const Navbar = ({ onAuthChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginSuccess = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      setIsAuthenticated(true);
      onAuthChange(true, user);

      // Store user data in Firestore
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      console.log("Login Successful:", user);
    } catch (error) {
      console.error("Login Failed:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setUser(null);
      onAuthChange(false, null);
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Logout Failed:", error.message);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold tracking-wide cursor-pointer hover:text-yellow-400 transition duration-300">
          Learn<span className="text-yellow-400">Path</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#features" className="hover:text-yellow-400">Features</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Build Your Path</a></li>
          <li>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={handleLoginSuccess}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Sign In with Google
              </button>
            )}
          </li>
        </ul>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

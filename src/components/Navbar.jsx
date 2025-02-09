import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon library

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold text-green-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">Ayurveda AI</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-green-600 transition">Dashboard</Link>
          <Link to="/nutrition" className="hover:text-green-600 transition">Nutrition Plan</Link>
          <Link to="/profile" className="hover:text-green-600 transition">Profile</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md p-4 space-y-4"
        >
          <Link to="/" className="block hover:text-green-600 transition">Home</Link>
          <Link to="/dashboard" className="block hover:text-green-600 transition">Dashboard</Link>
          <Link to="/nutrition" className="block hover:text-green-600 transition">Nutrition Plan</Link>
          <Link to="/profile" className="block hover:text-green-600 transition">Profile</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

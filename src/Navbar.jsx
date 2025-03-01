import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from './assets/MYlogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Brand Name */}
        <motion.div 
          className="text-white text-2xl font-bold cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="Mylogo"  className="w-10 h-10"/>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="text-white text-lg cursor-pointer hover:text-gray-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-800 w-full text-center absolute top-full left-0 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                className="text-white text-lg py-2 cursor-pointer hover:text-gray-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

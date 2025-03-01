import React from "react";
import { FaGithub, FaWhatsapp,FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";

const DockDemo = () => {
  return (
    <div className="flex justify-center items-center ">
      <motion.div
        className="relative p-4 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <motion.div
          className="flex space-x-4  p-4 rounded-full shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {[
            { icon: <FaGithub size={32} className="text-gray-400" />, link: "https://github.com/gunalchandran" },
            { icon: <FaWhatsapp size={32} className="text-green-500" />, link: "https://wa.me/" },
            { icon: <FaLinkedin size={32} className="text-blue-900" />, link: "https://www.linkedin.com/in/gunal-c-63262327a/" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DockDemo;

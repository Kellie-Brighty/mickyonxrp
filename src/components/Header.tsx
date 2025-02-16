import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const navItems = ["Mickey's Story", "Memories", "Tribute"];

  return (
    <motion.header
      className="fixed w-full z-50 flex justify-between items-center p-4 bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.img
        src="/assets/micky-one.jpg"
        alt="Mickey"
        className="w-12 h-12 rounded-full border-2 border-purple-500"
        whileHover={{
          scale: 1.1,
          rotate: 360,
          transition: { duration: 0.6 },
        }}
      />
      <nav>
        <motion.ul
          className="flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
            >
              <a
                href={`#${item
                  .toLowerCase()
                  .replace("'s", "")
                  .replace(" ", "-")}`}
                className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                <span className="relative">
                  {item}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;

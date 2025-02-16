import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Mickey's Story", "Memories", "Tribute"];

  return (
    <motion.header
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="flex justify-between items-center p-4">
        <motion.img
          src="/assets/micky-cart.png"
          alt="Mickey"
          className="w-12 h-12 rounded-full border-2 border-purple-500"
          whileHover={{
            scale: 1.1,
            rotate: 360,
            transition: { duration: 0.6 },
          }}
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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
          <SocialLinks />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-600 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul className="flex flex-col p-4 space-y-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={`#${item
                      .toLowerCase()
                      .replace("'s", "")
                      .replace(" ", "-")}`}
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <SocialLinks className="pt-2" />
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

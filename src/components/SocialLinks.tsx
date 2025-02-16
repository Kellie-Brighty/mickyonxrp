import React from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const SocialLinks: React.FC<{ className?: string }> = ({ className = "" }) => {
  const links = [
    {
      icon: <FaTelegramPlane className="w-5 h-5" />,
      url: "https://t.me/mickeyonxrp",
      label: "Telegram",
    },
    {
      icon: <RiTwitterXFill className="w-5 h-5" />,
      url: "https://x.com/xrpmickey",
      label: "X (Twitter)",
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-700 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.icon}
          <span className="sr-only">{link.label}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks; 
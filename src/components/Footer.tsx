import React from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-8 px-8 bg-gradient-to-b from-purple-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10 space-y-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <SocialLinks className="mb-2" />
          <p className="text-center text-gray-600">
            In loving memory of Mickey © 2024
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -z-0 w-[300px] h-[300px] bg-purple-200/10 rounded-full blur-3xl left-1/2 -translate-x-1/2 -bottom-32"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.footer>
  );
};

export default Footer;

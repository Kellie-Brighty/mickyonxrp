import React from "react";
import { motion } from "framer-motion";

const MemoriesSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-b from-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text">
          Cherished Memories
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 relative"
        >
          {/* Main Image */}
          <motion.div
            variants={item}
            className="md:col-span-2 md:row-span-2 relative group"
          >
            <motion.img
              src="/assets/micky-three.jpg"
              alt="Mickey"
              className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>

          {/* Grid of smaller images */}
          <motion.div variants={item} className="relative group">
            <motion.img
              src="/assets/micky-six.jpg"
              alt="Mickey"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>

          <motion.div variants={item} className="relative group">
            <motion.img
              src="/assets/micky-seven.jpg"
              alt="Mickey"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>

          <motion.div variants={item} className="relative group">
            <motion.img
              src="/assets/micky-four.jpg"
              alt="Mickey"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>

          {/* Bottom wide image */}
          <motion.div variants={item} className="md:col-span-3 relative group">
            <motion.img
              src="/assets/micky-eight.jpg"
              alt="Mickey"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -z-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl left-0 top-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default MemoriesSection;

import React from "react";
import { motion } from "framer-motion";

const RememberingSection: React.FC = () => {
  const memories = [
    {
      title: "Playful Spirit",
      description: "Mickey's playful nature brought joy to everyone around",
    },
    {
      title: "Gentle Soul",
      description: "Known for gentle purrs and loving cuddles",
    },
    {
      title: "Brave Fighter",
      description: "Showed incredible strength throughout the journey",
    },
    {
      title: "Family's Heart",
      description: "Forever a cherished member of our family",
    },
  ];

  return (
    <section className="py-20 px-8 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-purple-800 text-transparent bg-clip-text">
          Remembering Mickey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <motion.h3
                className="text-2xl font-semibold mb-3 text-purple-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {memory.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {memory.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -z-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl -right-48 -top-48"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -z-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl -left-48 -bottom-48"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default RememberingSection;

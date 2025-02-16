import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex justify-center items-center text-center overflow-hidden"
      style={{ backgroundImage: "url('/assets/micky-one.jpg')" }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.h1
            className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
            animate={{
              backgroundPosition: ["0%", "100%"],
              color: ["#A78BFA", "#7C3AED"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            MICKEY
          </motion.h1>
          <motion.p
            className="text-2xl text-white/90 mt-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Forever in our hearts
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute -z-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
      </div>
    </section>
  );
};

export default Hero;

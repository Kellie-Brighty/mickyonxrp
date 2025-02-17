import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy, FaChartLine } from "react-icons/fa";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "rHyoqhVf9ag6MpB3SeEZYfQqLmeYaEq8nf";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      <div className="relative z-10 px-4 space-y-8">
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

        {/* Contract Address and Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-2 max-w-md">
            <p className="text-white/90 text-sm truncate">
              {contractAddress}
            </p>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              <FaCopy className="w-4 h-4" />
            </motion.button>
          </div>

          <AnimatePresence>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-green-400 text-sm absolute"
              >
                Copied to clipboard!
              </motion.p>
            )}
          </AnimatePresence>

          <motion.a
            href="https://dexscreener.com/xrpl/4D49434B45590000000000000000000000000000.rHyoqhVf9ag6MpB3SeEZYfQqLmeYaEq8nf_xrp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChartLine className="w-5 h-5" />
            <span>View Chart</span>
          </motion.a>
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
